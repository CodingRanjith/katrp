import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { filterOptions, sortOptions } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { Star } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];
  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }
  return queryParams.join("&");
}

function formatDuration(durationStrArray = []) {
  let totalSeconds = 0;
  durationStrArray.forEach((item) => {
    if (item) {
      const parts = item.split(":").map(Number);
      if (parts.length === 2) totalSeconds += parts[0] * 60 + parts[1];
      if (parts.length === 3)
        totalSeconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
  });
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  return `${h > 0 ? `${h}h ` : ""}${m}m`;
}

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const {
    studentViewCoursesList,
    setStudentViewCoursesList,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const index = Object.keys(cpyFilters).indexOf(getSectionId);
    if (index === -1) {
      cpyFilters[getSectionId] = [getCurrentOption.id];
    } else {
      const idx = cpyFilters[getSectionId].indexOf(getCurrentOption.id);
      if (idx === -1) cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(idx, 1);
    }
    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  async function fetchAllStudentViewCourses(filters, sort, search) {
    const queryObj = { ...filters, sortBy: sort };
    if (search) queryObj.search = search;
    const query = new URLSearchParams(queryObj);
    const response = await fetchStudentViewCourseListService(query);
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
      setLoadingState(false);
    }
  }

  async function handleCourseNavigate(courseId) {
    navigate(`/course/details/${courseId}`);
  }

  useEffect(() => {
    const queryString = createSearchParamsHelper(filters);
    setSearchParams(new URLSearchParams(queryString));
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters && sort) fetchAllStudentViewCourses(filters, sort, search);
  }, [filters, sort, search]);

  useEffect(() => () => sessionStorage.removeItem("filters"), []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Top controls: search, sort, results count */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex-1 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for courses, instructors, topics..."
            className="border rounded-lg px-4 py-2 w-full md:w-96 focus:ring-2 focus:ring-blue-200"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Sort By
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(value) => setSort(value)}
              >
                {sortOptions.map((sortItem) => (
                  <DropdownMenuRadioItem
                    value={sortItem.id}
                    key={sortItem.id}
                  >
                    {sortItem.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-sm font-medium text-gray-700">
            {studentViewCoursesList.length} results
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <aside className="space-y-4 col-span-1">
          {Object.keys(filterOptions).map((section) => (
            <div className="border p-4 rounded shadow-sm" key={section}>
              <h3 className="font-semibold mb-2 text-gray-700 uppercase">
                {section}
              </h3>
              {filterOptions[section].map((opt) => (
                <Label
                  key={opt.id}
                  className="flex items-center gap-2 text-sm text-gray-600 mb-1"
                >
                  <Checkbox
                    checked={
                      filters?.[section]?.includes(opt.id) || false
                    }
                    onCheckedChange={() => handleFilterOnChange(section, opt)}
                  />
                  {opt.label}
                </Label>
              ))}
            </div>
          ))}
        </aside>

        {/* Main Content: grid of course cards */}
        <main className="col-span-3">
          {studentViewCoursesList?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentViewCoursesList.map((courseItem) => {
                const totalDuration = formatDuration(
                  courseItem?.curriculum?.map((c) => c.duration)
                );
                const lectures = courseItem?.curriculum?.length || 0;

                return (
                  <Card
                    key={courseItem?._id}
                    onClick={() => handleCourseNavigate(courseItem._id)}
                    className="hover:shadow-2xl hover:-translate-y-1 transition-all border rounded-2xl cursor-pointer group overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={courseItem?.image}
                        alt={courseItem?.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                        {courseItem?.level || "All level"}
                      </span>
                      {courseItem?.isFree && (
                        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                          Free
                        </span>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-500">
                          {courseItem?.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <PiChalkboardTeacher className="w-4 h-4" />
                          {courseItem?.instructorName || "Instructor"}
                        </span>
                      </div>
                      <CardTitle className="text-base font-bold mb-1 line-clamp-2">
                        {courseItem?.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {courseItem?.subtitle || "Course subtitle..."}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-yellow-500 text-xs">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`$${
                                i < Math.round(courseItem?.rating || 4)
                                  ? "fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-1 font-medium">
                            {courseItem?.rating || "4.5"}/5
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <FaRegClock className="w-4 h-4" /> {totalDuration}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <PiChalkboardTeacher className="w-4 h-4" /> {lectures} lectures
                        </span>
                      </div>
                      <div className="mt-2 font-semibold text-lg text-green-600">
                        {courseItem?.isFree ? "Free" : `₹${courseItem?.pricing}`}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : loadingState ? (
            <Skeleton className="h-32 w-full" />
          ) : (
            <p className="text-center text-gray-500">No courses found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
export default StudentViewCoursesPage;
