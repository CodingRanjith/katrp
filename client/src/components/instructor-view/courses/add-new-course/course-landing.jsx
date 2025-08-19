import FormControls from "@/components/common-form/form-controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);
  return (
    <div className="w-full">
      <Card className="rounded-2xl shadow-lg border border-gray-100 bg-white w-full">
        <CardHeader className="bg-purple-50 rounded-t-2xl border-b border-gray-100 px-10 py-6">
          <CardTitle className="text-2xl font-bold text-purple-700">
            Course Landing Page
          </CardTitle>
        </CardHeader>
        <CardContent className="px-10 py-12 space-y-10">
          <div className="space-y-6">
            <FormControls
              formControls={courseLandingPageFormControls}
              formData={courseLandingFormData}
              setFormData={setCourseLandingFormData}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CourseLanding;
