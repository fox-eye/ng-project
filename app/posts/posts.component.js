System.register(['angular2/core', './post.service', '../shared/spinner.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    this.commentsLoading = true;
                }
                PostsComponent.prototype.setCurrentlySelected = function (selectedPost) {
                    var _this = this;
                    this.currentPost = selectedPost;
                    this._postService.getComments(selectedPost.id).subscribe(function (comments) {
                        _this.currentPost.comments = comments;
                    }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts().subscribe(function (posts) {
                        _this.posts = posts;
                    }, null, function () { return _this.isLoading = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/posts.template.html',
                        styles: ["\n   .posts li  { cursor: default; } \n   .posts li:hover { background:  #ecf0f1; }\n\n   .list-\u00AD\u2010group-\u00AD\u2010item.active, \n    .list-\u00AD\u2010group-\u00AD\u2010item.active:hover,  \n    .list-\u00AD\u2010group-\u00AD\u2010item.active:focus { \n      background-color: #ecf0f1;\n      border-color: #ecf0f1;  \n      color: #2c3e50;\n    }\n  "],
                        directives: [spinner_component_1.SpinnerComponent],
                        providers: [post_service_1.PostService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map