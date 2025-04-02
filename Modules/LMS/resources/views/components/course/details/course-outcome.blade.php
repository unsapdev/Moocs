@if (isset($course->courseOutComes) && !empty($course->courseOutComes))
    <article>
        <h2 class="area-title xl:text-3xl mb-5">
            {{ translate('Learning Outcomes') }}
        </h2>
        <ul class="text-heading dark:text-white font-medium list-image-none [&>:not(:first-child)]:mt-2">
            @foreach ($course->courseOutComes as $courseOutCome)
                <li class="flex gap-4 before:font-remix before:content-['\f100'] before:leading-[1.9] before:text-primary">
                    {{ $courseOutCome?->title }}
                </li>
            @endforeach
        </ul>
    </article>
@endif
