(function(app) {
    var _CACHE = {};
    var _initializeCache = function() {
        _CACHE = {
            imageUpload: document.getElementById('imageUpload'),
            subjectImage: document.getElementById('subjectImage'),
            gridColumn : document.getElementById('gridColumn'),
            flexContainer : document.getElementById('flexContainer'),
            gridColor : document.getElementById('gridColor')
        }
    };
    var _initializeEvents = function() {
        _CACHE.imageUpload.addEventListener('change', __handleImageSrcChange);
        _CACHE.gridColumn.addEventListener('change', __handleGridColumnChange);
        _CACHE.gridColor.addEventListener('change', __handleGridColorChange);
    };
    var __handleImageSrcChange = function() {
        if(_CACHE.imageUpload.files[0].size > 4000000) {
            alert('File Size Too Large');
            return;
        }
        _CACHE.subjectImage.src = URL.createObjectURL(_CACHE.imageUpload.files[0]);
        _CACHE.gridColumn.removeAttribute('disabled');
        _CACHE.gridColor.removeAttribute('disabled');
    }
    var __handleGridColumnChange = function() {
        _CACHE.flexContainer.removeAttribute('class');
        _CACHE.flexContainer.classList.add(this.value , 'flex-container');
    }
    var __handleGridColorChange = function() {
        _CACHE.flexContainer.style.setProperty("--grid-color", this.value);
    }
    var init = function() {
        _initializeCache();
        _initializeEvents();
    }

    return app.ImagePreview = {
        init: init
    };
}(window.app = window.app || {}));