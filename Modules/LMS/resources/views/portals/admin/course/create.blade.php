<x-dashboard-layout>
    @push('css')
        <script src="{{ asset('lms/assets/js/vendor/sortable.min.js') }}"></script>
    @endpush
    <x-slot:title>{{ translate('Create Course') }}</x-slot:title>
    <!-- BREADCRUMB -->
    <x-portal::admin.breadcrumb back-url="{{ route('course.index') }}" title="Create" page-to="Course" />
    <div class="mb-4">
        <div id="msform">
            <x-portal::course.basic-form action="{{ route('course.store') }}" />
        </div>
    </div>
    <x-portal::course.tag-form action="{{ route('tag.store') }}" />

    <h1 id="chapterList" class="hidden"></h1>
    @push('js')
        <script src="{{ edulab_asset('lms/assets/js/component/stepper.js') }}"></script>
        <script src="{{ edulab_asset('lms/assets/js/course.js') }}"></script>
    @endpush

</x-dashboard-layout>
