webpackJsonp([0,2],[,function(t,e,s){"use strict";var a=s(2),r=s(16),o=s(11),n=s.n(o),i=s(12),u=s.n(i);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"login",component:n.a},{path:"/Register",name:"register",component:u.a}]})},,function(t,e,s){s(10);var a=s(0)(s(5),s(15),null,null);t.exports=a.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(1);e.default={name:"login",data:function(){return{user:{userName:"",password:""},apiUrl:"http://localhost:8080/vuelogin"}},mounted:function(){},methods:{login:function(){var t=this;console.log("user: "+this.user),this.$http.post(this.apiUrl+"/user/login",this.user).then(function(e){console.log("login: "+e),t.$router.push("/Register")})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register",data:function(){return{password:"",user:{userName:"",password:""},show:!1,regUrl:"http://192.168.2.128:8080/vueLogin"}},computed:{password:function(){this.password!=this.user.password&&(this.show=!0)}},methods:{register:function(){this.$http.post(this.regUrl,this.user).then(function(t){console.log("register: "+t)})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(9);var a=s(0)(s(6),s(14),"data-v-7e5f52c9",null);t.exports=a.exports},function(t,e,s){s(8);var a=s(0)(s(7),s(13),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("h2",[t._v("登录成功，可进行注册")]),t._v(" "),s("form",{staticClass:"register-form"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"label-info"},[t._v("账号:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userName,expression:"user.userName"}],staticClass:"input-info",attrs:{type:"text"},domProps:{value:t.user.userName},on:{input:function(e){e.target.composing||(t.user.userName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"label-info"},[t._v("密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input-info",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"label-info"},[t._v("确认密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-info",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"check"},[t._v("密码不一致!")])]),t._v(" "),s("div",{staticClass:"form-control"},[s("button",{staticClass:"button",attrs:{type:"reset"}},[t._v("重置")]),t._v(" "),s("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.register}},[t._v("注册")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("h2",[t._v("Login")]),t._v(" "),s("form",{staticClass:"login-form"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"label-info"},[t._v("账号:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userName,expression:"user.userName"}],staticClass:"input-info",attrs:{type:"text"},domProps:{value:t.user.userName},on:{input:function(e){e.target.composing||(t.user.userName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"label-info"},[t._v("密码:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input-info",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-control"},[s("button",{staticClass:"button",attrs:{type:"reset"}},[t._v("重置")]),t._v(" "),s("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.login}},[t._v("登录")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},,,,function(t,e){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),r=s(3),o=s.n(r),n=s(1),i=s(4),u=s.n(i);a.a.config.productionTip=!1,a.a.use(u.a),new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:o.a}})}],[20]);
//# sourceMappingURL=app.07296b5360cb88fa1eb7.js.map