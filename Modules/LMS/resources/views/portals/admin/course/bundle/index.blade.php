<x-dashboard-layout>
    <x-slot:title>{{ translate('Manage Bundle') }}</x-slot:title>
    <!-- BREADCRUMB -->
    <x-portal::admin.breadcrumb title="Course Bundle" page-to="Bundle" action-route="{{ route('bundle.create') }}" />

    <div class="card overflow-hidden">

        <div class="flex items-center gap-2 pb-5 mb-5 border-b border-gray-200 dark:border-dark-border">
            <a href="{{ route('bundle.index', ['filter' => 'all']) }}"
                class="badge badge-primary-outline b-outline group/b-counter is-hover-active rounded-full dk-theme-card-square {{ get_active_filter_tab() === 'all' ? 'active' : '' }}">{{ translate('All') }}
                <span class="badge-counter rounded-full dk-theme-card-square">{{ $countData['total'] ?? 0 }}</span>
            </a></a>
            <a href="{{ route('bundle.index') }}"
                class="badge badge-primary-outline b-outline group/b-counter is-hover-active rounded-full dk-theme-card-square {{ get_active_filter_tab() === 'published' ? 'active' : '' }}">
                {{ translate('Published') }}
                <span
                    class="badge-counter rounded-full dk-theme-card-square">{{ $countData['published'] ?? 0 }}</span></a>
            <a href="{{ route('bundle.index', ['filter' => 'trash']) }}"
                class="badge badge-primary-outline b-outline group/b-counter is-hover-active rounded-full dk-theme-card-square {{ get_active_filter_tab() === 'trash' ? 'active' : '' }}">
                {{ translate('Trash') }}
                <span class="badge-counter rounded-full dk-theme-card-square">{{ $countData['trashed'] ?? 0 }}</span>
            </a>
        </div>
        @if ($bundles->count() > 0)
            <div class="overflow-x-auto">
                <table
                    class="table-auto border-collapse w-full whitespace-nowrap text-left text-gray-500 dark:text-dark-text font-medium">
                    <thead class="text-primary-500">
                        <tr>
                            <th
                                class="px-3.5 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg first:dk-theme-card-square-left last:dk-theme-card-square-right">
                                {{ translate('Title') }}
                            </th>
                            <th
                                class="px-3.5 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg first:dk-theme-card-square-left last:dk-theme-card-square-right">
                                {{ translate('Price') }}
                            </th>
                            <th
                                class="px-3.5 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg first:dk-theme-card-square-left last:dk-theme-card-square-right">
                                {{ translate('Course') }}
                            </th>
                            <th
                                class="px-3.5 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg first:dk-theme-card-square-left last:dk-theme-card-square-right">
                                {{ translate('Date Created') }}
                            </th>

                            <th
                                class="px-3.5 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg first:dk-theme-card-square-left last:dk-theme-card-square-right">
                                {{ translate('Status') }}
                            </th>
                            <th
                                class="px-3.5 py-4 bg-[#F2F4F9] dark:bg-dark-card-two first:rounded-l-lg last:rounded-r-lg first:dk-theme-card-square-left last:dk-theme-card-square-right w-10">
                                {{ translate('Action') }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-dark-border-three">
                        @foreach ($bundles as $bundle)
                            @php
                                $translations = parse_translation($bundle);
                                $title = translate('Do you want to move to Trash');
                                $text = translate(
                                    'If you move to Trash, all data related to the course bundle and purchase bundle will be trashed.',
                                );

                                if ($bundle->trashed()) {
                                    $title = translate('Are you sure you want to delete this permanently');
                                    $text = translate(
                                        'If You delete it,course bundle and purchase bundle  all data will be deleted permanently.',
                                    );
                                }

                                $currency = $bundle->currency ?? 'USD-$';
                                $currencySymbol = get_currency_symbol($currency);
                            @endphp

                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center gap-3">
                                        @if (fileExists('lms/courses/bundles', $bundle->thumbnail) && $bundle->thumbnail != '')
                                            <a href="#"
                                                class="size-12 rounded-50 overflow-hidden dk-theme-card-square">
                                                <img src="{{ asset('storage/lms/courses/bundles/' . $bundle->thumbnail) }}"
                                                    alt="thumb" class="size-full object-cover">
                                            </a>
                                        @endif
                                        <div>
                                            <h6 class="text-heading dark:text-white font-bold line-clamp-1"> <a
                                                    href="#">{{ $translations['title'] ?? ($bundle->title ?? '') }}</a>
                                            </h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4">{{ $currencySymbol }}{{ number_format($bundle->price, 2) }}</td>
                                <td class="p-4">{{ $bundle?->courses?->count() }}</td>

                                <td class="p-4">{{ customDateFormate($bundle->created_at) }}</td>

                                <td class="px-3.5 py-4">
                                    <div class="form-check form-switch">
                                        <label class="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" class="hidden appearance-none peer status-change"
                                                name="status" data-action="{{ route('bundle.status', $bundle->id) }}"
                                                {{ $bundle->status == 1 ? 'checked' : '' }}
                                                {{ $bundle->trashed() ? 'disabled' : '' }}>
                                            <span class="switcher switcher-primary-solid"></span>
                                        </label>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex items-center gap-1">
                                        @if ($bundle->trashed())
                                            <button data-action="{{ route('bundle.restore', $bundle->id) }}"
                                                class="btn-icon btn-primary-icon-light size-8 trash-restore-btn-cs"
                                                title="{{ translate('Restore') }}"
                                                data-title="{{ translate('Do you want to restore it') }}">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor" fill-rule="evenodd"
                                                        d="M160 168.296c64.802 0 117.334 29.715 117.334 66.37q0 1.34-.093 2.665l.028-.294h.065v165.926c0 36.655-52.532 66.37-117.334 66.37c-63.361 0-114.992-28.409-117.256-63.937l-.077-2.433V237.037h.073a38 38 0 0 1-.073-2.37c0-36.656 52.532-66.37 117.333-66.37m0 218.074c-28.365 0-54.38-5.693-74.667-15.17v22.316l.018 1.197c.684 12.202 32.466 31.954 74.657 31.954c23.075 0 44.362-5.79 59.26-15.367c10.256-6.594 14.782-12.874 15.34-16.01l.059-.623V371.2c-20.286 9.478-46.3 15.171-74.667 15.171m0-85.333c-28.361 0-54.373-5.692-74.658-15.167l-.002 35.906l1.446-.009c1.73 1.73 5.179 4.59 11.254 8.027c15.143 8.566 37.48 13.91 61.96 13.91s46.818-5.344 61.96-13.91c7.501-4.243 11-7.609 12.2-9.05l.507-.004l.003-34.875c-20.287 9.478-46.303 15.172-74.67 15.172m0-90.074c-41.237 0-74.666 10.984-74.666 24.533S118.764 260.03 160 260.03c41.238 0 74.667-10.984 74.667-24.534s-33.43-24.533-74.667-24.533m248.775 144.288l-29.779-30.563C401.874 301.564 416 269.765 416 234.667c0-42.82-21.025-80.729-53.316-103.966l-.017 82.632H320V64h149.334v42.667l-68.447-.002c35.432 31.273 57.78 77.027 57.78 128.002c0 47.08-19.063 89.707-49.892 120.584" />
                                                </svg>
                                            </button>
                                        @else
                                            <a href="{{ route('bundle.translate', ['id' => $bundle->id, 'locale' => app()->getLocale()]) }}"
                                                class="btn-icon btn-primary-icon-light size-8">
                                                <i class="ri-translate text-inherit text-base"></i>
                                            </a>
                                            <a href="{{ route('bundle.edit', $bundle->id) }}"
                                                class="btn-icon btn-primary-icon-light size-8">
                                                <i class="ri-edit-2-line text-inherit text-base"></i>
                                            </a>
                                        @endif

                                        <button class="btn-icon btn-danger-icon-light size-8 delete-btn-cs"
                                            data-action="{{ route('bundle.destroy', $bundle->id) }}"
                                            data-title="{{ $title }}" data-text="{{ $text }}">
                                            <i class="ri-delete-bin-line text-inherit text-base"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <!-- START PAGINATION -->
            {{ $bundles->links('portal::admin.pagination.paginate') }}
    </div>
@else
    <x-portal::admin.empty-card title="No bundle" action="{{ route('bundle.create') }}" btnText="Add New" />
    @endif
</x-dashboard-layout>
