@php
    $data = $topic['data'];
@endphp

@if ($type == 'video')
    @if ($data->video_src_type == 'youtube' || $data->video_src_type == 'vimeo')
        <div class="plyr__video-embed" id="player">
            <iframe src="{{ $data->video_url }}" allowfullscreen allowtransparency allow="autoplay"></iframe>
        </div>
        <script>
            new Plyr("#player", {
                settings: ["speed"],
                seekTime: 0,
                ratio: "16:7",
                speed: {
                    selected: 1,
                    options: [0.5, 0.75, 1, 1.25, 1.5]
                },
            });
        </script>
    @elseif($data->video_src_type == 'local')
        @if (
            $data->system_video &&
                fileExists('lms/courses/topics/videos/', $data->system_video) == true &&
                $data->system_video != '')
            <video id="main-course-video" playsinline controls data-poster="assets/images/course/course-2.png">
                <source src="{{ asset('storage/lms/courses/topics/videos/' . $data->system_video) }}" type="video/mp4" />
            </video>
        @endif
        <script>
            const player = new Plyr("#player", {
                settings: ["speed"],
                seekTime: 0,
                ratio: "16:7",
                speed: {
                    selected: 1,
                    options: [0.5, 0.75, 1, 1.25, 1.5]
                },
            });
        </script>
    @endif
@elseif($type == 'reading')
    <div class="p-5 md:p-8 xl:p-10 relative overflow-hidden aspect-[16/7] bg-primary-50 rounded-xl">
        <div class="size-full overflow-x-hidden overflow-y-auto">
            <h5 class="area-title text-xl">{{ $data->title }}</h5>
            <div class="area-description mt-5">
                {!! clean($data->description) !!}
            </div>
        </div>
    </div>
    <!-- Add highlight.js for syntax highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.area-description pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        });
    </script>
@elseif($type == 'assignment')
    <div class="p-5 md:p-8 xl:p-10 relative overflow-hidden aspect-[16/7] bg-primary-50 rounded-xl">
        <div class="size-full flex-center">
            <a href="{{ route('exam.start', ['type' => $type, 'exam_type_id' => $data->id, 'course_id' => $data?->topic?->course_id]) }}"
                class="btn b-solid btn-primary-solid"
                aria-label="Go to assignment"
            >
                {{ translate('Go to Assignment') }}
            </a>
        </div>
    </div>
@elseif($type == 'quiz')
    <div class="p-5 md:p-8 xl:p-10 relative overflow-hidden aspect-[16/7] bg-primary-50 rounded-xl">
        <div class="size-full flex-center">
            <a href="{{ route('exam.start', ['type' => $type, 'exam_type_id' => $data->id, 'course_id' => $topic['courseId'], 'topic_id' => $topic['topicId'], 'chapterId' => $topic['chapterId']]) }}"
                class="btn b-solid btn-primary-solid"
                aria-label="Go to quiz"
            >
                {{ translate('Go to Quiz') }}
            </a>
        </div>
    </div>
@endif
