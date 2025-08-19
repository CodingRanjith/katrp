import React from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ChevronDown, ChevronRight, Plus, Trash2, FileText, Video, BookOpen, HelpCircle } from "lucide-react";
import { instructorMediaUploadService } from "@/services";

// Helper for uploading a file to Linode
async function uploadToLinode(file, onProgress) {
  const formData = new FormData();
  formData.append('file', file);
  const data = await instructorMediaUploadService(formData, onProgress);
  if (data.success) return data.data.url;
  throw new Error(data.message || 'Upload failed');
}

function CourseCurriculum({ curriculum: propCurriculum = [], setCurriculum: propSetCurriculum }) {
  // Fallback to internal state if setCurriculum is not a function
  const [internalCurriculum, setInternalCurriculum] = React.useState(propCurriculum);
  const curriculum = propSetCurriculum ? propCurriculum : internalCurriculum;
  const setCurriculum = React.useCallback((val) => {
    if (typeof propSetCurriculum === 'function') {
      propSetCurriculum(val);
    } else {
      setInternalCurriculum(val);
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('CourseCurriculum: setCurriculum prop not provided, using internal state.');
      }
    }
  }, [propSetCurriculum]);

  const [assessment, setAssessment] = React.useState(null);
  const [assessmentMeta, setAssessmentMeta] = React.useState({
    title: '',
    description: '',
    instructions: '',
    passPercent: 60,
  });
  const [openModules, setOpenModules] = React.useState([]);

  // Collapsible logic
  const toggleModule = (idx) => {
    setOpenModules((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // Add/Remove modules
  const addModule = () => {
    setCurriculum([
      ...curriculum,
      { name: '', items: [] }
    ]);
  };
  const removeModule = (idx) => {
    setCurriculum(curriculum.filter((_, i) => i !== idx));
  };
  const updateModuleName = (idx, value) => {
    setCurriculum(
      curriculum.map((m, i) => (i === idx ? { ...m, name: value } : m))
    );
  };

  // Add items
  const addVideo = (modIdx) => {
    setCurriculum(
      curriculum.map((m, i) =>
        i === modIdx
          ? { ...m, items: [...(Array.isArray(m.items) ? m.items : []), { type: 'video', title: '', videoUrl: '', description: '', uploading: false, error: null, freePreview: false }] }
          : m
      )
    );
  };
  const addQuiz = (modIdx) => {
    setCurriculum(
      curriculum.map((m, i) =>
        i === modIdx
          ? { ...m, items: [...(Array.isArray(m.items) ? m.items : []), { type: 'quiz', question: '', options: ['', '', '', ''], correct: 0 }] }
          : m
      )
    );
  };
  const addResource = (modIdx) => {
    setCurriculum(
      curriculum.map((m, i) =>
        i === modIdx
          ? { ...m, items: [...(Array.isArray(m.items) ? m.items : []), { type: 'resource', title: '', resourceUrl: '', uploading: false, error: null }] }
          : m
      )
    );
  };

  // Remove item
  const removeItem = (modIdx, itemIdx) => {
    setCurriculum(curriculum => curriculum.map((m, i) => {
      if (i !== modIdx) return m;
      return { ...m, items: m.items.filter((_, idx) => idx !== itemIdx) };
    }));
  };

  // Update item fields
  const updateVideo = (modIdx, itemIdx, field, value) => {
    setCurriculum(curriculum => curriculum.map((m, i) => {
      if (i !== modIdx) return m;
      return {
        ...m,
        items: m.items.map((item, idx) =>
          idx === itemIdx && item.type === 'video'
            ? { ...item, [field]: value }
            : item
        )
      };
    }));
  };
  const updateQuiz = (modIdx, itemIdx, field, value) => {
    setCurriculum(curriculum => curriculum.map((m, i) => {
      if (i !== modIdx) return m;
      return {
        ...m,
        items: m.items.map((item, idx) =>
          idx === itemIdx && item.type === 'quiz'
            ? { ...item, [field]: value }
            : item
        )
      };
    }));
  };
  const updateQuizOption = (modIdx, itemIdx, optIdx, value) => {
    setCurriculum(curriculum => curriculum.map((m, i) => {
      if (i !== modIdx) return m;
      return {
        ...m,
        items: m.items.map((item, idx) => {
          if (idx === itemIdx && item.type === 'quiz') {
            const newOptions = [...item.options];
            newOptions[optIdx] = value;
            return { ...item, options: newOptions };
          }
          return item;
        })
      };
    }));
  };
  const updateResource = (modIdx, itemIdx, field, value) => {
    setCurriculum(curriculum => curriculum.map((m, i) => {
      if (i !== modIdx) return m;
      return {
        ...m,
        items: m.items.map((item, idx) =>
          idx === itemIdx && item.type === 'resource'
            ? { ...item, [field]: value }
            : item
        )
      };
    }));
  };

  // File upload for video/resource
  const handleVideoFile = async (modIdx, itemIdx, file) => {
    updateVideo(modIdx, itemIdx, 'uploading', true);
    updateVideo(modIdx, itemIdx, 'error', null);
    try {
      const url = await uploadToLinode(file);
      updateVideo(modIdx, itemIdx, 'videoUrl', url);
      updateVideo(modIdx, itemIdx, 'uploading', false);
    } catch (err) {
      updateVideo(modIdx, itemIdx, 'uploading', false);
      updateVideo(modIdx, itemIdx, 'error', err.message);
    }
  };
  const handleResourceFile = async (modIdx, itemIdx, file) => {
    updateResource(modIdx, itemIdx, 'uploading', true);
    updateResource(modIdx, itemIdx, 'error', null);
    try {
      const url = await uploadToLinode(file);
      updateResource(modIdx, itemIdx, 'resourceUrl', url);
      updateResource(modIdx, itemIdx, 'uploading', false);
    } catch (err) {
      updateResource(modIdx, itemIdx, 'uploading', false);
      updateResource(modIdx, itemIdx, 'error', err.message);
    }
  };

  // Drag and drop handler
  const onDragEnd = (result, modIdx) => {
    if (!result.destination) return;
    const { source, destination } = result;
    setCurriculum(curriculum => curriculum.map((m, i) => {
      if (i !== modIdx) return m;
      const items = Array.from(m.items);
      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);
      return { ...m, items };
    }));
  };

  // Assessment logic (unchanged)
  const handleAddAssessment = () => {
    setAssessment({
      questions: [
        { question: '', options: ['', '', '', ''], correct: 0, time: 60 },
      ],
    });
  };
  const updateAssessmentQ = (qIdx, field, value) => {
    setAssessment((a) => ({
      ...a,
      questions: a.questions.map((q, i) =>
        i === qIdx ? { ...q, [field]: value } : q
      ),
    }));
  };
  const updateAssessmentOpt = (qIdx, optIdx, value) => {
    setAssessment((a) => ({
      ...a,
      questions: a.questions.map((q, i) =>
        i === qIdx
          ? { ...q, options: q.options.map((o, oi) => (oi === optIdx ? value : o)) }
          : q
      ),
    }));
  };
  const addAssessmentQ = () => {
    setAssessment((a) => ({
      ...a,
      questions: [
        ...a.questions,
        { question: '', options: ['', '', '', ''], correct: 0, time: 60 },
      ],
    }));
  };
  const removeAssessmentQ = (qIdx) => {
    setAssessment((a) => ({
      ...a,
      questions: a.questions.filter((_, i) => i !== qIdx),
    }));
  };

  // --- RENDER ---
  return (
    <div className="space-y-8 relative">
      <div className="flex justify-between items-center sticky top-0 z-10 bg-[#f7f9fa] py-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-purple-600" /> Course Curriculum
        </h2>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-full shadow flex items-center gap-2 hover:bg-purple-700 transition"
          onClick={addModule}
        >
          <Plus className="w-5 h-5" /> Add Module
        </button>
      </div>
      {curriculum.length === 0 && (
        <div className="text-center text-gray-400 py-12 text-lg flex flex-col items-center gap-2">
          <HelpCircle className="w-10 h-10 mb-2 text-purple-200" />
          Start by adding your first module.
        </div>
      )}
      {curriculum.map((mod, modIdx) => (
        <div key={modIdx} className="border rounded-2xl p-0 bg-white shadow-lg overflow-hidden transition-all">
          {/* Module Header */}
          <div
            className="flex items-center gap-4 px-6 py-4 bg-purple-50 cursor-pointer group hover:bg-purple-100 transition"
            onClick={() => toggleModule(modIdx)}
          >
            <div className="flex items-center gap-4 w-full">
              <span>
                {openModules.includes(modIdx) ? (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-purple-400" />
                )}
              </span>
              <input
                className="border-0 bg-transparent font-semibold text-lg w-64 focus:ring-0 focus:outline-none"
                placeholder={`Module ${modIdx + 1} Title`}
                value={mod.name}
                onChange={(e) => updateModuleName(modIdx, e.target.value)}
                onClick={e => e.stopPropagation()}
              />
              <button
                className="ml-auto text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                onClick={e => { e.stopPropagation(); removeModule(modIdx); }}
                title="Remove Module"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Module Content with DragDropContext */}
          {openModules.includes(modIdx) && (
            <div className="space-y-6 px-6 py-6 border-t">
              <div className="flex gap-2 mb-4">
                <button className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-purple-200" onClick={() => addVideo(modIdx)}><Plus className="w-4 h-4" /> Add Video</button>
                <button className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-yellow-200" onClick={() => addQuiz(modIdx)}><Plus className="w-4 h-4" /> Add Quiz</button>
                <button className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-gray-200" onClick={() => addResource(modIdx)}><Plus className="w-4 h-4" /> Add Resource</button>
              </div>
              <DragDropContext onDragEnd={result => onDragEnd(result, modIdx)}>
                <Droppable droppableId={`droppable-${modIdx}`}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {(mod.items || []).map((item, idx) => (
                        <Draggable key={idx} draggableId={`item-${modIdx}-${idx}`} index={idx}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-4 p-4 rounded bg-gray-50 flex flex-col gap-2 shadow">
                              {item.type === 'video' && (
                                <>
                                  <div className="flex items-center gap-2">
                                    <Video className="w-5 h-5 text-purple-500" />
                                    <input className="border px-2 py-1 rounded w-56" placeholder="Video Title" value={item.title} onChange={e => updateVideo(modIdx, idx, 'title', e.target.value)} />
                                    <input type="file" accept="video/*" onChange={e => handleVideoFile(modIdx, idx, e.target.files[0])} disabled={item.uploading} />
                                    {item.uploading && <span className="text-xs text-blue-500 ml-2">Uploading...</span>}
                                    {item.videoUrl && (<video src={item.videoUrl} controls width={120} className="ml-2" />)}
                                    {item.error && <span className="text-xs text-red-500 ml-2">{item.error}</span>}
                                  </div>
                                  <textarea className="border px-2 py-1 rounded w-full" placeholder="Video Description" value={item.description} onChange={e => updateVideo(modIdx, idx, 'description', e.target.value)} />
                                  <label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={item.freePreview} onChange={e => updateVideo(modIdx, idx, 'freePreview', e.target.checked)} /> Free Preview</label>
                                  <button className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition self-end" onClick={() => removeItem(modIdx, idx)} title="Remove Video"><Trash2 className="w-4 h-4" /></button>
                                </>
                              )}
                              {item.type === 'quiz' && (
                                <>
                                  <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-yellow-500" /><span className="font-semibold">Quiz</span></div>
                                  <input className="border px-2 py-1 rounded w-full" placeholder="Quiz Question" value={item.question} onChange={e => updateQuiz(modIdx, idx, 'question', e.target.value)} />
                                  <div className="grid grid-cols-2 gap-2">
                                    {item.options.map((opt, optIdx) => (
                                      <input key={optIdx} className="border px-2 py-1 rounded" placeholder={`Option ${optIdx + 1}`} value={opt} onChange={e => updateQuizOption(modIdx, idx, optIdx, e.target.value)} />
                                    ))}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <label className="text-sm">Correct Option:</label>
                                    <select value={item.correct} onChange={e => updateQuiz(modIdx, idx, 'correct', Number(e.target.value))} className="border rounded px-2 py-1">
                                      {item.options.map((_, i) => (<option key={i} value={i}>{`Option ${i + 1}`}</option>))}
                                    </select>
                                  </div>
                                  <button className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition self-end" onClick={() => removeItem(modIdx, idx)} title="Remove Quiz"><Trash2 className="w-4 h-4" /></button>
                                </>
                              )}
                              {item.type === 'resource' && (
                                <>
                                  <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-gray-500" /><input className="border px-2 py-1 rounded w-56" placeholder="Resource Title" value={item.title} onChange={e => updateResource(modIdx, idx, 'title', e.target.value)} /><input type="file" onChange={e => handleResourceFile(modIdx, idx, e.target.files[0])} disabled={item.uploading} />{item.uploading && <span className="text-xs text-blue-500 ml-2">Uploading...</span>}{item.resourceUrl && (<a href={item.resourceUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-green-600 underline">View</a>)}{item.error && <span className="text-xs text-red-500 ml-2">{item.error}</span>}</div>
                                  <button className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition self-end" onClick={() => removeItem(modIdx, idx)} title="Remove Resource"><Trash2 className="w-4 h-4" /></button>
                                </>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          )}
        </div>
      ))}
      <div className="pt-6">
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-600 flex items-center gap-2 shadow"
          onClick={handleAddAssessment}
        >
          <FileText className="w-5 h-5" /> Add Assessment
        </button>
      </div>
      {assessment && (
        <div className="border rounded-2xl p-6 bg-white shadow-lg space-y-6 mt-4">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" /> Assessment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Assessment Title (e.g. Final Test)"
              value={assessmentMeta.title}
              onChange={e => setAssessmentMeta(meta => ({ ...meta, title: e.target.value }))}
            />
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Pass Percentage (e.g. 60)"
              type="number"
              min={1}
              max={100}
              value={assessmentMeta.passPercent}
              onChange={e => setAssessmentMeta(meta => ({ ...meta, passPercent: Number(e.target.value) }))}
            />
          </div>
          <textarea
            className="border px-2 py-1 rounded w-full mt-2"
            placeholder="Assessment Description (shown to learners)"
            value={assessmentMeta.description}
            onChange={e => setAssessmentMeta(meta => ({ ...meta, description: e.target.value }))}
            rows={2}
          />
          <textarea
            className="border px-2 py-1 rounded w-full mt-2"
            placeholder="Instructions (e.g. You must answer 60% correctly to pass. Time limit applies.)"
            value={assessmentMeta.instructions}
            onChange={e => setAssessmentMeta(meta => ({ ...meta, instructions: e.target.value }))}
            rows={2}
          />
          <div className="text-sm text-gray-500 mb-2 mt-2">Learners must score at least <span className="font-bold text-purple-700">{assessmentMeta.passPercent}%</span> to pass this assessment.</div>
          {assessment.questions.map((q, qIdx) => (
            <div key={qIdx} className="border rounded p-3 space-y-2 bg-purple-50">
              <input
                className="border px-2 py-1 rounded w-full"
                placeholder="Assessment Question"
                value={q.question}
                onChange={(e) => updateAssessmentQ(qIdx, "question", e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <input
                    key={optIdx}
                    className="border px-2 py-1 rounded"
                    placeholder={`Option ${optIdx + 1}`}
                    value={opt}
                    onChange={(e) => updateAssessmentOpt(qIdx, optIdx, e.target.value)}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Correct Option:</label>
                <select
                  value={q.correct}
                  onChange={(e) => updateAssessmentQ(qIdx, "correct", Number(e.target.value))}
                  className="border rounded px-2 py-1"
                >
                  {q.options.map((_, i) => (
                    <option key={i} value={i}>{`Option ${i + 1}`}</option>
                  ))}
                </select>
                <label className="text-sm ml-4">Time (sec):</label>
                <input
                  type="number"
                  min={10}
                  className="border rounded px-2 py-1 w-20"
                  value={q.time}
                  onChange={(e) => updateAssessmentQ(qIdx, "time", Number(e.target.value))}
                />
                <button
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition ml-auto"
                  onClick={() => removeAssessmentQ(qIdx)}
                  title="Remove Question"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <button
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full mt-2 flex items-center gap-1 hover:bg-purple-200"
            onClick={addAssessmentQ}
          >
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>
      )}
    </div>
  );
}


export default CourseCurriculum;
