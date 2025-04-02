(function ($) {
    "use strict";

    $(".country-list").select2({
        placeholder: `${selectCountry}`,
    });
    $(".state-list").select2({
        placeholder: `${selectState}`,
    });
    $(".city-list").select2({
        placeholder: `${selectCity}`,
        width: "100%",
    });

    $(document).on("submit", ".form", function (e) {
        e.preventDefault();
        let form = $(this);
        let formData = new FormData(form[0]);
        let action = form.attr("action");
        let submitButton = $(form).find("button[type='submit']");
        let btnText = submitButton.text();
        $.ajax({
            url: action,
            method: "POST",
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
                submitButton.html(`<div class="animate-spin text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M304 48a48 48 0 1 0-96 0a48 48 0 1 0 96 0m0 416a48 48 0 1 0-96 0a48 48 0 1 0 96 0M48 304a48 48 0 1 0 0-96a48 48 0 1 0 0 96m464-48a48 48 0 1 0-96 0a48 48 0 1 0 96 0M142.9 437A48 48 0 1 0 75 369.1a48 48 0 1 0 67.9 67.9m0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437a48 48 0 1 0 67.9-67.9a48 48 0 1 0-67.9 67.9"/>
                        </svg>
                        
                    </div> ${btnText}`);
                submitButton.attr("disabled", true);
            },

            success: function (data) {
                console.log(data);
                if (data.status == "error") {
                    submitButton.attr("disabled", false);
                    submitButton.html(`${btnText}`);
                    if (data.hasOwnProperty("message")) {
                        Command: toastr["error"](`${data.message}`);
                    }
                    if (data.data !== "") {
                        logErrorMsg(data.data);
                    }
                } else if (data.status == "success") {
                    submitButton.removeAttr("disabled", "false");
                    $(form).find("button[type='submit']").html(`${btnText}`);
                    if (data.hasOwnProperty("url")) {
                        location.replace(`${data.url}`);
                    }
                    if (
                        data.hasOwnProperty("modal_hide") &&
                        data.modal_hide == "yes"
                    ) {
                        $(".fixed.inset-0").removeClass("flex");
                        $(".fixed.inset-0").addClass("hidden");
                    }
                    if (data.hasOwnProperty("ai_type")) {
                        $("#outputContent").text(`${data.data}`);
                    }
                    if (data.hasOwnProperty("message")) {
                        Command: toastr["success"](`${data.message}`);
                    }
                    if (data.hasOwnProperty("type")) {
                        location.reload();
                    }

                    resetForm();
                }
            },
        });
    });

    $(document).on("click", ".default-change", function (e) {
        let title = $(this).data("title");
        Swal.fire({
            title: title ?? `${warningLanguage}`,
            text: "",
            showCancelButton: true,
            confirmButtonColor: "#5F71FA",
            cancelButtonColor: "#FF4626",
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            customClass: {
                title: "text-heading",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                let action = $(this).data("action");
                $.ajax({
                    url: action,
                    method: "GET",
                    dataType: "json",
                    success: function (data) {
                        if (data.status == "success") {
                            Command: toastr["success"](`${data.message}`);
                            Swal.fire({
                                title: `${changedText}!`,
                                text: `${title ?? confirmationLanguage}`,
                                icon: "success",
                            }).then((result) => {
                                if (data.hasOwnProperty("url")) {
                                    location.href = data.url;
                                }
                            });
                        } else if (data.status == "error") {
                            if (data.hasOwnProperty("message")) {
                                Command: toastr["error"](`${data.message}`);
                            }
                        }
                    },
                });
            }
        });
    });

    $(document).on("click", ".status-change", function (e) {
        let action = $(this).data("action");
        $.ajax({
            url: action,
            method: "GET",
            dataType: "json",
            success: function (data) {
                if (data.status == "success") {
                    Command: toastr["success"](`${data.message}`);
                    if (data.hasOwnProperty("url")) {
                        location.href = data.url;
                    }
                } else if (data.status == "error") {
                    if (data.hasOwnProperty("message")) {
                        Command: toastr["error"](`${data.message}`);
                    }
                }
            },
        });
    });
    $(document).on("click", ".delete-btn-cs", function (e) {
        let self = $(this);
        let title = self.data("title");
        title = title ?? deletePermanently;
        let type = self.data("type");
        let info = self.data("text");
        let adminType = type ?? "";
        let html = `
            <div class="text-left">
                <label class="form-label flex items-center gap-2">
                    <input type="checkbox" checked disabled name="name">
                    ${allCurriculum}
                </label>
                <label class="form-label flex items-center gap-2">
                    <input type="checkbox" checked disabled name="name">
                    ${allTopic}
                </label>
                <label class="form-label flex items-center gap-2">
                    <input type="checkbox" checked disabled name="name">
                    ${purchaseHistory}
                </label>
                <label class="form-label flex items-center gap-2">
                    <input type="checkbox" checked disabled name="name">
                    ${bundleCourse}
                </label>
                <label class="form-label flex items-center gap-2">
                    <input type="checkbox" checked  disabled name="name">
                    ${courseData}
                </label>
            </div>
        `;
        Swal.disableInput();
        Swal.fire({
            html: adminType == "admin" ? html : "",
            title: title + "?",
            text: info ?? "",
            showCancelButton: true,
            confirmButtonColor: "#5F71FA",
            cancelButtonColor: "#FF4626",
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            customClass: {
                title: "text-heading",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                let action = $(self).data("action");
                $.ajax({
                    url: action,
                    method: "delete",
                    data: { _token: $("#csrf-token")[0].content },
                    dataType: "json",
                    success: function (data) {
                        if (data.status == "success") {
                            if (data.hasOwnProperty("type")) {
                                self.parent().parent().remove();
                            } else {
                                self.parent().parent().parent().remove();
                            }
                            Swal.fire({
                                title: deletedText + "!",
                                text: dataDeleted,
                                icon: "success",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    if (data.hasOwnProperty("url")) {
                                        location.href = data.url;
                                    }
                                }
                            });
                        } else if (data.status == "error") {
                            if (data.hasOwnProperty("message")) {
                                Command: toastr["error"](`${data.message}`);
                            }
                        }
                    },
                });
            }
        });
    });

    $(document).on("click", ".trash-restore-btn-cs", function (e) {
        let self = $(this);
        let title = self.data("title");
        title = title ?? "You won't be able to revert this!";
        let info = self.data("text");
        Swal.fire({
            title: title + "?",
            text: info,
            showCancelButton: true,
            confirmButtonColor: "#5F71FA",
            cancelButtonColor: "#FF4626",
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            customClass: {
                title: "text-heading",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                let action = $(self).data("action");
                $.ajax({
                    url: action,
                    method: "put",
                    data: { _token: $("#csrf-token")[0].content },
                    dataType: "json",
                    success: function (data) {
                        if (data.status == "success") {
                            Swal.fire({
                                title: successText,
                                icon: "success",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    location.href = data.url;
                                }
                            });
                        } else if (data.status == "error") {
                            if (data.hasOwnProperty("message")) {
                                Command: toastr["error"](`${data.message}`);
                            }
                        }
                    },
                });
            }
        });
    });

    //=================== theme  setting ===============

    $(document).on("change", ".theme-setting-image", function (e) {
        themeFileUpload(this);
    });

    // ===================  themOption  read file ====================

    function loadFile(event) {
        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById("output");
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    function themeFileUpload(self) {
        if (self.files && self.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                let action = baseUrl + "/theme-setting/image-upload-file";
                let old_file = $(self).parent().find("#oldFile").val();
                let type = $(self).attr("data-type");

                $.ajax({
                    url: action,
                    type: "POST",
                    data: {
                        image: e.target.result,
                        old_file: old_file,
                        type: type,
                    },
                    dataType: "json",
                    success: function (data) {
                        if (data.status === "success") {
                            $(self)
                                .parent()
                                .find("#oldFile")
                                .val(data.image_name);

                            if (type != undefined) {
                                $("#certificateImg").css(
                                    "background-image",
                                    "url(" + data.path + ")"
                                );
                            }
                        }
                    },
                    error: function (data) {
                        Command: toastr["error"](`Not Found`);
                    },
                });
                $(self)
                    .parent()
                    .parent()
                    .find("#preview_img")
                    .attr("src", e.target.result);
            };

            reader.readAsDataURL(self.files[0]);
        }
    }

    /** print error message
     * ======== logErrorMsg======
     *
     * @param msg
     *
     */
    function logErrorMsg(msg) {
        $.each(msg, function (key, value) {
            $("." + key + "_err")
                .text(value)
                .fadeIn()
                .delay(5000)
                .fadeOut("slow");
        });
    }

    $(document).on("change", ".country-state", function (e) {
        e.preventDefault();
        let countryId = $(this).find("option:selected").val();

        if (countryId !== "Select Country") {
            let action = baseUrl + "/localization/country-state/" + countryId;
            let appendLocation = $("#stateOption");
            let selected = "Select State";
            if (countryId !== "") {
                ajaxLocation(action, appendLocation, selected);
            }
        }
    });

    $(document).on("change", ".state-city", function (e) {
        e.preventDefault();
        let stateId = $(this).find("option:selected").val();
        let action = baseUrl + "/localization/state-city/" + stateId;
        let appendLocation = $("#cityOption");
        let selected = selectCity;
        if (stateId !== "" && typeof stateId !== "undefined") {
            ajaxLocation(action, appendLocation, selected);
        }
    });

    function ajaxLocation(action, appendLocation, selected) {
        $.ajax({
            url: action,
            method: "GET",
            dataType: "json",
            success: function (data) {
                $(appendLocation).html("");
                let options = [];
                $.each(data.data, function (key, val) {
                    options.push(
                        `<option value="${val.id}"> ${val.name}</option>`
                    );
                });
                $(appendLocation).append(
                    `<option selected disabled>${selected}</option> ${options}`
                );
            },
            error: function (data) {
                Command: toastr["error"](`Not Found`);
            },
        });
    }
    let countryId = $("#countryId").val();

    if (typeof countryId !== "undefined" && countryId !== "") {
        $(".country-state").trigger("change");
    }

    let stateId = $("#stateId").val();
    let cityId = $("#cityId").val();

    if (typeof stateId !== "undefined" && stateId !== "") {
        $(".state-city").trigger("change");
        setTimeout(() => {
            $(".state-city").select2("val", stateId);
        }, 1000);
    }

    if (typeof cityId !== "undefined" && cityId !== "") {
        setTimeout(() => {
            $(".city-list").select2("val", cityId);
        }, 1500);
    }
    $(document).on("change", ".select-status-change", function () {
        let action = $(this).data("action");
        let val = $(this).val();
        $.ajax({
            url: action,
            method: "GET",
            data: { status: val },
            dataType: "json",
            success: function (data) {
                if (data.status == "success") {
                    if (data.hasOwnProperty("type")) {
                        location.reload();
                    }
                }
            },
            error: function (data) {
                Command: toastr["error"](`Not Found`);
            },
        });
    });

    $(document).on("submit", ".add_setting", function (e) {
        e.preventDefault();
        let form = $(this);
        let formData = new FormData(form[0]);
        let action = form.attr("action");
        let key = form.data("key");
        formData.append("key", key);

        $.ajax({
            url: action,
            type: "POST",
            dataType: "json",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data.status === "success") {
                    toastr["success"](`${data.message}`);
                } else if (data.status == "error") {
                    toastr["error"](`${data.message}`);
                }
            },
        });
    });

    $(document).on("click", ".btn-support-delete", function () {
        let self = $(this);
        let action = $(self).data("action");

        $.ajax({
            url: action,
            type: "GET",
            dataType: "json",
            success: function (data) {
                $(self).parent().remove();
                if (data.status === "success") {
                    toastr["success"](`${data.message}`);
                } else if (data.status == false) {
                    toastr["error"](`${data.message}`);
                }
            },
            error: function (data) {
                Command: toastr["error"](`Not Found`);
            },
        });
    });

    // theme-option editor custom and js;

    $(".editorContainer").each((index, value) => {
        CodeMirror.fromTextArea($(".editorContainer")[index], {
            mode: "javascript",
            lineNumbers: false,
            theme: "material",
            matchBrackets: true,
            continueComments: enterText,
            matchBrackets: true,
            lineWrapping: true,
            extraKeys: { "Ctrl-Space": "autocomplete" },
        });
    });

    $(document).on("change", ".organization-list", function (e) {
        e.preventDefault();
        let action = baseUrl + "/organization-instructor/" + $(this).val();
        let locale = $(this).data("locale");
        $.ajax({
            url: action,
            method: "GET",
            data: { locale: locale },
            dataType: "json",
            success: function (data) {
                $("#instructorOption").html("");
                $("#instructorOption").append(`${data.data}`);
            },
        });
    });

    $("#supportCategory").hide();
    $("#supportCourse").hide();

    $(document).on("change", ".support-category-type", function (e) {
        if ($(this).val() == "platform") {
            $("#supportCategory").show();
            $("#supportCourse").hide();
        } else if ($(this).val() == "course") {
            $("#supportCategory").hide();
            $("#supportCourse").show();
        }
    });

    $(document).on("click", ".add-item", function () {
        let parent = $(this).closest("form").find(".total-length");
        let key = parent.data("length");

        $(".social-area").append(
            `<div class="flex items-end gap-5 mt-7 group-item">
                <div class="grid grid-cols-2 gap-4 grow">
                    <div class="col-span-full xl:col-auto leading-none">
                        <label class="form-label">${iconClassName}</label>
                        <input type="text" name="socials[${key}][icon]" class="form-input">
                    </div>
                    <div class="col-span-full xl:col-auto leading-none">
                        <label class="form-label">${linkUrl}</label>
                        <input type="text" class="form-input" name="socials[${key}][url]">
                    </div>
                </div>
                <button type="button" class="btn b-solid btn-danger-solid dk-theme-card-square max-h-fit shrink-0 delete-item">
                    ${deleteText}
                </button>
            </div> `
        );
        key++;
        $(parent).data("length", key);
    });

    $(document).on("click", ".delete-item", function () {
        $(this).closest(".group-item").remove();
    });

    // Poster Section Reapeter
    let imgUploadPathPoster = $("#imgUploadPathPoster").val();

    $(document).on("click", ".add-poster", function () {
        let parent = $(this).closest(".card").find(".poster-area");
        let key = parent.data("length");

        $(".poster-area").append(`
             <div class="card grid grid-cols-2 gap-x-4 gap-y-6 poster-item">
                <div class="col-span-full 2xl:col-auto leading-none">
                    <label class="form-label">${titleText}</label>
                    <input type="text" name="poster[${key}][title]" class="form-input">
                </div>
                <div class="col-span-full 2xl:col-auto leading-none">
                    <label class="form-label">${descriptionText}</label>
                    <input type="text" name="poster[${key}][description]" class="form-input">
                </div>
                <div class="col-span-full 2xl:col-auto leading-none">
                    <label class="form-label">${buttonText}</label>
                    <input type="text" name="poster[${key}][button_label]" class="form-input">
                </div>
                <div class="col-span-full 2xl:col-auto leading-none">
                    <label class="form-label">${buttonUrl}</label>
                    <input type="text" class="form-input" name="poster[${key}][button_link]" />
                </div>       

                <div class="col-span-full leading-none">
                    <label class="form-label">${posterBgImage}</label>
                    <label for="bannerImage${key}"
                        class="dropzone-wrappe file-container ac-bg text-xs leading-none font-semibold mb-3 cursor-pointer w-full h-[200px] flex flex-col items-center justify-center gap-2.5 border border-dashed border-gray-900 rounded-10 dk-theme-card-square">
                        <input type="file" class="dropzone theme-setting-image" hidden
                            id ="bannerImage${key}">
                        <input type="hidden" name="poster[${key}][poster_img]" id="oldFile">
                        <span class="flex-center flex-col peer-[.uploaded]/file:hidden">
                            <img src="${imgUploadPathPoster}"
                                alt="file-icon" class="size-8 lg:size-auto">
                            <div class="text-gray-500 dark:text-dark-text mt-2">${chooseFile}</div>
                        </span>
                    </label>

                      <div class="preview-zone dropzone-preview">
                           <div class="box box-solid">
                                <img id="preview_img" src="" width="120">
                           </div>
                       </div>
                </div>
                <button type="button"
                    class="btn b-solid btn-danger-solid dk-theme-card-square max-h-fit shrink-0 delete-poster-item">
                    ${deleteText}
                </button>
             </div>
           
            `);
        key++;
        $(parent).data("length", key);
    });

    $(document).on("click", ".delete-poster-item", function () {
        $(this).closest(".poster-item ").remove();
    });

    // bundle-price-cal

    $(document).on("change", ".bundle-price-cal", function () {
        let price = $(this).val();
        let platformFee = $("#platform_fee").val();
        var x = Number(platformFee);
        platformFee = parseInt(platformFee, 10);
        price = Number(price);
        let totalPrice = x + price;
        $("#total_price").val(totalPrice);
    });

    //check-enable-parent

    $(document).on("change", ".check-enable-parent", function () {
        let isChecked = $(this).prop("checked");
        let childElements = $(this)
            .closest(".group-permission")
            .find(".check-enable-child");
        $.each(childElements, function (index, val) {
            $(val).prop("checked", isChecked);
        });
    });
    $(document).on("click", ".copytext", function () {
        let textarea = document.getElementById("outputContent");
        textarea.select();
        document.execCommand("copy");
    });
})(jQuery);

function resetForm() {
    $(".form").trigger("reset");
}
