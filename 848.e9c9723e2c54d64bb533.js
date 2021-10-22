"use strict";(self.webpackChunkangular_blog=self.webpackChunkangular_blog||[]).push([[848],{7848:(nt,f,l)=>{l.r(f),l.d(f,{AdminModule:()=>et});var s=l(8583),u=l(1385),t=l(639),c=l(6331),v=l(7709);let m=(()=>{class n{constructor(){this.alert$=new v.xQ}success(e){this.alert$.next({type:"success",text:e})}warning(e){this.alert$.next({type:"warning",text:e})}danger(e){this.alert$.next({type:"danger",text:e})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const A=function(n,i,e){return{"alert-success":n,"alert-warning":i,"alert-danger":e}};function b(n,i){if(1&n&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.kEZ(2,A,"success"===e.type,"warning"===e.type,"danger"===e.type)),t.xp6(1),t.Oqu(e.text)}}let T=(()=>{class n{constructor(e){this.alertService=e,this.delay=5e3,this.type="success"}ngOnInit(){this.aSub=this.alertService.alert$.subscribe(e=>{this.text=e.text,this.type=e.type;const o=setTimeout(()=>{clearTimeout(o),this.text=""},this.delay)})}ngOnDestroy(){this.aSub&&this.aSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{delay:"delay"},decls:1,vars:1,consts:[["class","alert-wrap",4,"ngIf"],[1,"alert-wrap"],[1,"alert",3,"ngClass"]],template:function(e,o){1&e&&t.YNc(0,b,3,6,"div",0),2&e&&t.Q6J("ngIf",o.text)},directives:[s.O5,s.mk],styles:[".alert-wrap[_ngcontent-%COMP%]{position:fixed;top:50px;right:40px;max-width:200px}"]}),n})();const x=function(){return["/admin","dashboard"]},C=function(){return["/admin","create"]};function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"ul"),t.TgZ(1,"li",4),t.TgZ(2,"a",5),t._uU(3,"Dashboard"),t.qZA(),t.qZA(),t.TgZ(4,"li",4),t.TgZ(5,"a",5),t._uU(6,"Create"),t.qZA(),t.qZA(),t.TgZ(7,"li"),t.TgZ(8,"a",6),t.NdJ("click",function(a){return t.CHM(e),t.oxw().logout(a)}),t._uU(9,"Log out"),t.qZA(),t.qZA(),t.qZA()}2&n&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,x)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,C)))}let y=(()=>{class n{constructor(e,o){this.router=e,this.auth=o}ngOnInit(){}logout(e){e.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(c.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-layout"]],decls:8,vars:1,consts:[[1,"navbar","bg-primary"],["routerLink","/"],[4,"ngIf"],[1,"container"],["routerLinkActive","active"],[3,"routerLink"],["href","#",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"app-alert"),t.TgZ(1,"nav",0),t.TgZ(2,"h1"),t.TgZ(3,"a",1),t._uU(4,"Angular Admin"),t.qZA(),t.qZA(),t.YNc(5,q,10,4,"ul",2),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"router-outlet"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",o.auth.isAuthenticated()))},directives:[T,u.yS,s.O5,u.lC,u.Od],styles:[""]}),n})();var r=l(665);function w(n,i){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&n){const e=i.ngIf;t.xp6(1),t.hij(" ",e," ")}}function P(n,i){if(1&n&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.message," ")}}function I(n,i){1&n&&(t.TgZ(0,"small"),t._uU(1," Email can`t be empty "),t.qZA())}function J(n,i){1&n&&(t.TgZ(0,"small"),t._uU(1," Invalid email "),t.qZA())}function U(n,i){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,I,2,0,"small",13),t.YNc(2,J,2,0,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("email").errors.required),t.xp6(1),t.Q6J("ngIf",e.form.get("email").errors.email)}}function S(n,i){1&n&&(t.TgZ(0,"small"),t._uU(1," Password can`t be empty "),t.qZA())}function L(n,i){if(1&n&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.AsE(" Password must be longer then ",e.form.get("password").errors.minlength.requiredLength-1," symbols. There are only ",e.form.get("password").errors.minlength.actualLength," now. ")}}function N(n,i){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,S,2,0,"small",13),t.YNc(2,L,2,2,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("password").errors.required),t.xp6(1),t.Q6J("ngIf",e.form.get("password").errors.minlength)}}const h=function(n){return{invalid:n}};let Y=(()=>{class n{constructor(e,o,a){this.auth=e,this.router=o,this.route=a,this.submitted=!1}ngOnInit(){this.route.queryParams.subscribe(e=>{e.loginAgain?this.message="Please login":e.authFailed&&(this.message="Session expired")}),this.form=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email]),password:new r.NI(null,[r.kI.required,r.kI.minLength(6)])})}submit(){this.form.invalid||(this.submitted=!0,this.auth.login({email:this.form.value.email,password:this.form.value.password}).subscribe(()=>{this.form.reset(),this.router.navigate(["/admin","dashboard"]),this.submitted=!1},()=>{this.submitted=!1}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.e),t.Y36(u.F0),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-page"]],decls:18,vars:14,consts:[[1,"card",3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[1,"form-control",3,"ngClass"],["for","email"],["type","email","id","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[1,"alert","alert-info"],[1,"validation"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"h2"),t._uU(2,"Log in to admin panel"),t.qZA(),t.YNc(3,w,2,1,"div",1),t.ALo(4,"async"),t.YNc(5,P,2,1,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"label",4),t._uU(8,"Email:"),t.qZA(),t._UZ(9,"input",5),t.YNc(10,U,3,2,"div",6),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"label",7),t._uU(13,"Password:"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,N,3,2,"div",6),t.qZA(),t.TgZ(16,"button",9),t._uU(17,"Log in"),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("ngIf",t.lcZ(4,8,o.auth.error$)),t.xp6(2),t.Q6J("ngIf",o.message),t.xp6(1),t.Q6J("ngClass",t.VKq(10,h,o.form.get("email").touched&&o.form.get("email").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("email").touched&&o.form.get("email").invalid),t.xp6(1),t.Q6J("ngClass",t.VKq(12,h,o.form.get("password").touched&&o.form.get("password").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("password").touched&&o.form.get("password").invalid),t.xp6(1),t.Q6J("disabled",o.form.invalid||o.submitted))},directives:[r._Y,r.JL,r.sg,s.O5,s.mk,r.Fj,r.JJ,r.u],pipes:[s.Ov],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var d=l(6750);let Q=(()=>{class n{transform(e,o=""){return o.trim()?e.filter(a=>a.title.toLowerCase().includes(o.toLowerCase())):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"searchPosts",type:n,pure:!0}),n})();const O=function(n){return["/admin","post",n,"edit"]};function F(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"button",5),t._uU(12," Open "),t.qZA(),t.TgZ(13,"a",6),t.NdJ("click",function(){const p=t.CHM(e).$implicit;return t.oxw(2).remove(p.id)}),t._uU(14,"Delete"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.author),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.xi3(9,5,e.date,"medium")),t.xp6(3),t.Q6J("routerLink",t.VKq(8,O,e.id))}}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",2),t.TgZ(2,"input",3),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().searchStr=a}),t.qZA(),t.qZA(),t.TgZ(3,"table"),t.TgZ(4,"thead"),t.TgZ(5,"tr"),t.TgZ(6,"th"),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Author"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Date"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"tbody"),t.YNc(17,F,15,10,"tr",4),t.ALo(18,"searchPosts"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.searchStr),t.xp6(15),t.Q6J("ngForOf",t.xi3(18,2,e.posts,e.searchStr))}}function M(n,i){1&n&&(t.TgZ(0,"p",7),t._uU(1,"Loading..."),t.qZA())}let E=(()=>{class n{constructor(e,o){this.postsService=e,this.alert=o,this.posts=[],this.searchStr=""}ngOnInit(){this.pSub=this.postsService.getAll().subscribe(e=>{this.posts=e})}ngOnDestroy(){this.pSub&&this.pSub.unsubscribe(),this.dSub&&this.dSub.unsubscribe()}remove(e){this.postsService.remove(e).subscribe(()=>{this.posts=this.posts.filter(a=>a.id!==e),this.alert.warning("Deleted successfully")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.P),t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"form-control"],["type","text","placeholder","Find post",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"btn","btn-link","open",3,"routerLink"],[3,"click"],[1,"text-center"]],template:function(e,o){if(1&e&&(t.YNc(0,k,19,5,"div",0),t.YNc(1,M,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",o.posts.length)("ngIfElse",a)}},directives:[s.O5,r.Fj,r.JJ,r.On,s.sg,u.rH],pipes:[Q,s.uU],styles:[".open[_ngcontent-%COMP%]{margin-right:10px}"]}),n})();var _=l(4668);function D(n,i){1&n&&(t.TgZ(0,"small"),t._uU(1," Title can`t be empty "),t.qZA())}function j(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,D,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("title").errors.required)}}function G(n,i){1&n&&(t.TgZ(0,"small"),t._uU(1," Author can`t be empty "),t.qZA())}function $(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,G,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("author").errors.required)}}const Z=function(n){return{invalid:n}};let X=(()=>{class n{constructor(e,o){this.postsService=e,this.alertService=o}ngOnInit(){this.form=new r.cw({title:new r.NI(null,r.kI.required),text:new r.NI(null,r.kI.required),author:new r.NI(null,r.kI.required)})}submit(){if(this.form.invalid)return;const e={title:this.form.value.title,author:this.form.value.author,text:this.form.value.text,date:new Date};this.postsService.create(e).subscribe(()=>{this.form.reset(),this.alertService.success("Created successfully")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.P),t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-page"]],decls:19,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["type","text","id","title","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["for","author"],["type","text","id","author","formControlName","author"],["type","submit",1,"btn","btn-block","btn-dark",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"h1"),t._uU(2,"New post creation"),t.qZA(),t.TgZ(3,"div",1),t.TgZ(4,"label",2),t._uU(5,"Post title:"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,j,2,1,"div",4),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"label"),t._uU(10,"Post content:"),t.qZA(),t._UZ(11,"quill-editor",6),t.qZA(),t.TgZ(12,"div",1),t.TgZ(13,"label",7),t._uU(14,"Post author:"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,$,2,1,"div",4),t.qZA(),t.TgZ(17,"button",9),t._uU(18,"Create post"),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("ngClass",t.VKq(6,Z,o.form.get("title").touched&&o.form.get("title").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("title").touched&&o.form.get("title").invalid),t.xp6(5),t.Q6J("ngClass",t.VKq(8,Z,o.form.get("author").touched&&o.form.get("author").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("author").touched&&o.form.get("author").invalid),t.xp6(1),t.Q6J("disabled",o.form.invalid))},directives:[r._Y,r.JL,r.sg,s.mk,r.Fj,r.JJ,r.u,s.O5,_.g6],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var z=l(3190);function K(n,i){1&n&&(t.TgZ(0,"small"),t._uU(1," Title can`t be empty "),t.qZA())}function V(n,i){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,K,2,0,"small",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.form.get("title").errors.required)}}const H=function(n){return{invalid:n}};function B(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"form",2),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().submit()}),t.TgZ(2,"div",3),t.TgZ(3,"label",4),t._uU(4,"Post title:"),t.qZA(),t._UZ(5,"input",5),t.YNc(6,V,2,1,"div",6),t.qZA(),t.TgZ(7,"div",7),t._UZ(8,"quill-editor",8),t.qZA(),t.TgZ(9,"button",9),t._uU(10,"Save"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(1),t.Q6J("ngClass",t.VKq(4,H,e.form.get("title").touched&&e.form.get("title").invalid)),t.xp6(4),t.Q6J("ngIf",e.form.get("title").touched&&e.form.get("title").invalid),t.xp6(3),t.Q6J("disabled",e.form.invalid||e.submitted)}}function W(n,i){1&n&&(t.TgZ(0,"p",12),t._uU(1,"Loading..."),t.qZA())}let R=(()=>{class n{constructor(e,o){this.route=e,this.postsService=o,this.submitted=!1}ngOnInit(){this.route.params.pipe((0,z.w)(e=>this.postsService.getById(e.id))).subscribe(e=>{this.post=e,this.form=new r.cw({title:new r.NI(e.title,r.kI.required),text:new r.NI(e.text,r.kI.required)})})}submit(){this.form.invalid||(this.submitted=!0,this.uSub=this.postsService.update(Object.assign(Object.assign({},this.post),{text:this.form.value.text,title:this.form.value.title})).subscribe(()=>{this.submitted=!1}))}ngOnDestroy(){this.uSub&&this.uSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(d.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["type","text","id","title","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"validation"],[4,"ngIf"],[1,"text-center"]],template:function(e,o){if(1&e&&(t.YNc(0,B,11,6,"div",0),t.YNc(1,W,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",o.form)("ngIfElse",a)}},directives:[s.O5,r._Y,r.JL,r.sg,s.mk,r.Fj,r.JJ,r.u,_.g6],styles:[""]}),n})();var tt=l(4466);let g=(()=>{class n{constructor(e,o){this.auth=e,this.router=o}canActivate(e,o){if(this.auth.isAuthenticated())return!0;this.auth.logout(),this.router.navigate(["/admin","login"],{queryParams:{loginAgain:!0}})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(c.e),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[c.e,g,m],imports:[[s.ez,r.u5,r.UX,tt.m,u.Bz.forChild([{path:"",component:y,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:Y},{path:"dashboard",component:E,canActivate:[g]},{path:"create",component:X,canActivate:[g]},{path:"post/:id/edit",component:R,canActivate:[g]}]}])]]}),n})()}}]);