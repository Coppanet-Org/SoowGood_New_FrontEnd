import{b as ye,c as S,d as ke,e as N}from"./chunk-46JTLTO3.js";import{$ as G,B as ve,E as Ce,G as H,_ as xe,a as _e,ca as Z,da as L,fa as U,j as ge,k as m,x as we,y as be}from"./chunk-4DRUEFLH.js";import{A as J,B,Ba as R,C as T,Ca as b,Da as v,E as X,Ea as se,Ha as O,K as j,La as de,M as c,Na as ce,Oa as C,Ob as fe,Q as ee,S as te,Sa as P,T as A,X as g,Xa as y,Y as ie,Ya as k,aa as re,ba as ne,bb as he,d as h,db as le,fb as pe,gb as me,hb as V,ib as x,jb as p,m as I,ma as oe,mb as ue,ob as z,pb as Q,qb as f,rb as _,s as K,u as $,ua as w,v as l,xb as W,ya as ae,yb as D,za as o}from"./chunk-TXQBTV46.js";var De=["*"],Fe=["content"];function Ie(a,r){if(a&1){let M=he();y(0,"div",1),pe("click",function(){re(M);let t=V();return ne(t._onBackdropClicked())}),k()}if(a&2){let M=V();C("mat-drawer-shown",M._isShowingBackdrop())}}function Be(a,r){a&1&&(y(0,"mat-drawer-content"),p(1,2),k())}var Te=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],je=["mat-drawer","mat-drawer-content","*"];var Ae={transformDrawer:xe("transform",[L("open, open-instant",Z({transform:"none",visibility:"visible"})),L("void",Z({"box-shadow":"none",visibility:"hidden"})),U("void => open-instant",G("0ms")),U("void <=> open, open-instant => void",G("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var Re=new A("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:Oe}),Se=new A("MAT_DRAWER_CONTAINER");function Oe(){return!1}var q=(()=>{let r=class r extends S{constructor(e,t,i,s,d){super(i,s,d),this._changeDetectorRef=e,this._container=t}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}};r.\u0275fac=function(t){return new(t||r)(o(R),o(ee(()=>Ve)),o(w),o(ye),o(v))},r.\u0275cmp=g({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(t,i){t&2&&ce("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},standalone:!0,features:[W([{provide:S,useExisting:r}]),se,D],ngContentSelectors:De,decls:1,vars:0,template:function(t,i){t&1&&(x(),p(0))},encapsulation:2,changeDetection:0});let a=r;return a})(),Pe=(()=>{let r=class r{get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=m(e)}get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=m(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle(m(e))}constructor(e,t,i,s,d,E,F,Me){this._elementRef=e,this._focusTrapFactory=t,this._focusMonitor=i,this._platform=s,this._ngZone=d,this._interactivityChecker=E,this._doc=F,this._container=Me,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new h,this._animationEnd=new h,this._animationState="void",this.openedChange=new b(!0),this._openedStream=this.openedChange.pipe(l(n=>n),I(()=>{})),this.openedStart=this._animationStarted.pipe(l(n=>n.fromState!==n.toState&&n.toState.indexOf("open")===0),T(void 0)),this._closedStream=this.openedChange.pipe(l(n=>!n),I(()=>{})),this.closedStart=this._animationStarted.pipe(l(n=>n.fromState!==n.toState&&n.toState==="void"),T(void 0)),this._destroyed=new h,this.onPositionChanged=new b,this._modeChanged=new h,this.openedChange.subscribe(n=>{n?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{K(this._elementRef.nativeElement,"keydown").pipe(l(n=>n.keyCode===27&&!this.disableClose&&!ge(n)),c(this._destroyed)).subscribe(n=>this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()}))}),this._animationEnd.pipe(X((n,u)=>n.fromState===u.fromState&&n.toState===u.toState)).subscribe(n=>{let{fromState:u,toState:Y}=n;(Y.indexOf("open")===0&&u==="void"||Y==="void"&&u.indexOf("open")===0)&&this.openedChange.emit(this._opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{!t&&typeof this._elementRef.nativeElement.focus=="function"&&e.focus()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",t&&this._restoreFocus(i)),this._updateFocusTrapState(),new Promise(s=>{this.openedChange.pipe(B(1)).subscribe(d=>s(d?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}};r.\u0275fac=function(t){return new(t||r)(o(w),o(be),o(ve),o(_e),o(v),o(we),o(fe,8),o(Se,8))},r.\u0275cmp=g({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&Q(Fe,5),t&2){let s;f(s=_())&&(i._content=s.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&1&&me("@transform.start",function(d){return i._animationStarted.next(d)})("@transform.done",function(d){return i._animationEnd.next(d)}),t&2&&(de("align",null),le("@transform",i._animationState),C("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[D],ngContentSelectors:De,decls:3,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"],["content",""]],template:function(t,i){t&1&&(x(),y(0,"div",0,1),p(2),k())},dependencies:[S],encapsulation:2,data:{animation:[Ae.transformDrawer]},changeDetection:0});let a=r;return a})(),Ve=(()=>{let r=class r{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=m(e)}get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:m(e)}get scrollable(){return this._userContent||this._content}constructor(e,t,i,s,d,E=!1,F){this._dir=e,this._element=t,this._ngZone=i,this._changeDetectorRef=s,this._animationMode=F,this._drawers=new ue,this.backdropClick=new b,this._destroyed=new h,this._doCheckSubject=new h,this._contentMargins={left:null,right:null},this._contentMarginChanges=new h,e&&e.change.pipe(c(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),d.change().pipe(c(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=E}ngAfterContentInit(){this._allDrawers.changes.pipe(j(this._allDrawers),c(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(j(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(J(10),c(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(l(t=>t.fromState!==t.toState),c(this._drawers.changes)).subscribe(t=>{t.toState!=="open-instant"&&this._animationMode!=="NoopAnimations"&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(c(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e&&e.onPositionChanged.pipe(c(this._drawers.changes)).subscribe(()=>{this._ngZone.onMicrotaskEmpty.pipe(B(1)).subscribe(()=>{this._validateDrawers()})})}_watchDrawerMode(e){e&&e._modeChanged.pipe(c($(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}};r.\u0275fac=function(t){return new(t||r)(o(Ce,8),o(w),o(v),o(R),o(ke),o(Re),o(oe,8))},r.\u0275cmp=g({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,s){if(t&1&&(z(s,q,5),z(s,Pe,5)),t&2){let d;f(d=_())&&(i._content=d.first),f(d=_())&&(i._allDrawers=d)}},viewQuery:function(t,i){if(t&1&&Q(q,5),t&2){let s;f(s=_())&&(i._userContent=s.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){t&2&&C("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],standalone:!0,features:[W([{provide:Se,useExisting:r}]),D],ngContentSelectors:je,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(x(Te),O(0,Ie,1,2,"div",0),p(1),p(2,1),O(3,Be,2,0,"mat-drawer-content")),t&2&&(P(0,i.hasBackdrop?0:-1),ae(3),P(3,i._content?-1:3))},dependencies:[q],styles:['.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color);background-color:var(--mat-sidenav-content-background-color);box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);position:relative;z-index:4;color:var(--mat-sidenav-container-text-color);background-color:var(--mat-sidenav-container-background-color);border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0});let a=r;return a})();var pt=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=ie({type:r}),r.\u0275inj=te({imports:[H,N,N,H]});let a=r;return a})();export{q as a,Pe as b,Ve as c,pt as d};
