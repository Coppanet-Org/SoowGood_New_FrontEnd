"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[3848],{3848:(Nt,F,d)=>{d.d(F,{Nh:()=>St,SP:()=>At,uX:()=>S});var p=d(6895),e=d(4650),_=d(3238),h=d(4080),P=d(9643),M=d(2693),u=d(445),g=d(727),v=d(7579),y=d(4968),W=d(9646),k=d(6451),G=d(515),Y=d(9751),Q=d(2805),C=d(8675),z=d(1884),f=d(2722),K=d(5698),U=d(3900),$=d(5684),Z=d(9300),b=d(7340),m=d(1281),I=d(8605),T=d(3353),B=d(9521);function V(i,o){}const J=function(i){return{animationDuration:i}},q=function(i,o){return{value:i,params:o}};function X(i,o){1&i&&e.Hsn(0)}const w=["*"],tt=["tabListContainer"],et=["tabList"],at=["tabListInner"],nt=["nextPaginator"],it=["previousPaginator"],ot=["tabBodyWrapper"],rt=["tabHeader"];function st(i,o){}function dt(i,o){if(1&i&&e.YNc(0,st,0,0,"ng-template",14),2&i){const t=e.oxw().$implicit;e.Q6J("cdkPortalOutlet",t.templateLabel)}}function ct(i,o){if(1&i&&e._uU(0),2&i){const t=e.oxw().$implicit;e.Oqu(t.textLabel)}}function lt(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",6,7),e.NdJ("click",function(){const n=e.CHM(t),r=n.$implicit,s=n.index,c=e.oxw(),l=e.MAs(1);return e.KtG(c._handleClick(r,l,s))})("cdkFocusChange",function(n){const s=e.CHM(t).index,c=e.oxw();return e.KtG(c._tabFocusChanged(n,s))}),e._UZ(2,"span",8)(3,"div",9),e.TgZ(4,"span",10)(5,"span",11),e.YNc(6,dt,1,1,"ng-template",12),e.YNc(7,ct,1,1,"ng-template",null,13,e.W1O),e.qZA()()()}if(2&i){const t=o.$implicit,a=o.index,n=e.MAs(1),r=e.MAs(8),s=e.oxw();e.ekj("mdc-tab--active",s.selectedIndex===a),e.Q6J("id",s._getTabLabelId(a))("ngClass",t.labelClass)("disabled",t.disabled)("fitInkBarToContent",s.fitInkBarToContent),e.uIk("tabIndex",s._getTabIndex(a))("aria-posinset",a+1)("aria-setsize",s._tabs.length)("aria-controls",s._getTabContentId(a))("aria-selected",s.selectedIndex===a)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),e.xp6(3),e.Q6J("matRippleTrigger",n)("matRippleDisabled",t.disabled||s.disableRipple),e.xp6(3),e.Q6J("ngIf",t.templateLabel)("ngIfElse",r)}}function bt(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"mat-tab-body",15),e.NdJ("_onCentered",function(){e.CHM(t);const n=e.oxw();return e.KtG(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r._setTabBodyWrapperHeight(n))}),e.qZA()}if(2&i){const t=o.$implicit,a=o.index,n=e.oxw();e.ekj("mat-mdc-tab-body-active",n.selectedIndex===a),e.Q6J("id",n._getTabContentId(a))("ngClass",t.bodyClass)("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),e.uIk("tabindex",null!=n.contentTabIndex&&n.selectedIndex===a?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(a))}}const mt={translateTab:(0,b.X$)("translateTab",[(0,b.SB)("center, void, left-origin-center, right-origin-center",(0,b.oB)({transform:"none"})),(0,b.SB)("left",(0,b.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),(0,b.SB)("right",(0,b.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),(0,b.eR)("* => left, * => right, left => center, right => center",(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,b.eR)("void => left-origin-center",[(0,b.oB)({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,b.eR)("void => right-origin-center",[(0,b.oB)({transform:"translate3d(100%, 0, 0)",visibility:"hidden"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let _t=(()=>{class i extends h.Pl{constructor(t,a,n,r){super(t,a,r),this._host=n,this._centeringSub=g.w0.EMPTY,this._leavingSub=g.w0.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,C.O)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e._Vd),e.Y36(e.s_b),e.Y36((0,e.Gpc)(()=>R)),e.Y36(p.K0))},i.\u0275dir=e.lG2({type:i,selectors:[["","matTabBodyHost",""]],features:[e.qOj]}),i})(),ht=(()=>{class i{set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(t,a,n){this._elementRef=t,this._dir=a,this._dirChangeSubscription=g.w0.EMPTY,this._translateTabComplete=new v.x,this._onCentering=new e.vpe,this._beforeCentering=new e.vpe,this._afterLeavingCenter=new e.vpe,this._onCentered=new e.vpe(!0),this.animationDuration="500ms",this.preserveContent=!1,a&&(this._dirChangeSubscription=a.change.subscribe(r=>{this._computePositionAnimationState(r),n.markForCheck()})),this._translateTabComplete.pipe((0,z.x)((r,s)=>r.fromState===s.fromState&&r.toState===s.toState)).subscribe(r=>{this._isCenterPosition(r.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(r.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const a=this._isCenterPosition(t.toState);this._beforeCentering.emit(a),a&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const a=this._getLayoutDirection();return"ltr"==a&&t<=0||"rtl"==a&&t>0?"left-origin-center":"right-origin-center"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(u.Is,8),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,inputs:{_content:["content","_content"],origin:"origin",animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),i})(),R=(()=>{class i extends ht{constructor(t,a,n){super(t,a,n)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(u.Is,8),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,a){if(1&t&&e.Gf(h.Pl,5),2&t){let n;e.iGM(n=e.CRH())&&(a._portalHost=n.first)}},hostAttrs:[1,"mat-mdc-tab-body"],features:[e.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-mdc-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("@translateTab.start",function(r){return a._onTranslateTabStarted(r)})("@translateTab.done",function(r){return a._translateTabComplete.next(r)}),e.YNc(2,V,0,0,"ng-template",2),e.qZA()),2&t&&e.Q6J("@translateTab",e.WLB(3,q,a._position,e.VKq(1,J,a.animationDuration)))},dependencies:[_t],styles:['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}'],encapsulation:2,data:{animation:[mt.translateTab]}}),i})();const pt=new e.OlP("MatTabContent");let ut=(()=>{class i{constructor(t){this.template=t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.Rgc))},i.\u0275dir=e.lG2({type:i,selectors:[["","matTabContent",""]],features:[e._Bn([{provide:pt,useExisting:i}])]}),i})();const gt=new e.OlP("MatTabLabel"),E=new e.OlP("MAT_TAB");let ft=(()=>{class i extends h.ig{constructor(t,a,n){super(t,a),this._closestTab=n}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.Rgc),e.Y36(e.s_b),e.Y36(E,8))},i.\u0275dir=e.lG2({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[e._Bn([{provide:gt,useExisting:i}]),e.qOj]}),i})();const D="mdc-tab-indicator--active",L="mdc-tab-indicator--no-transition";class vt{constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar())}alignToElement(o){const t=this._items.find(n=>n.elementRef.nativeElement===o),a=this._currentItem;if(a?.deactivateInkBar(),t){const n=a?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}}function Tt(i){return class extends i{constructor(...o){super(...o),this._fitToContent=!1}get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(o){const t=(0,m.Ig)(o);this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(o){const t=this.elementRef.nativeElement;if(!o||!t.getBoundingClientRect||!this._inkBarContentElement)return void t.classList.add(D);const a=t.getBoundingClientRect(),n=o.width/a.width,r=o.left-a.left;t.classList.add(L),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${n})`),t.getBoundingClientRect(),t.classList.remove(L),t.classList.add(D),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this.elementRef.nativeElement.classList.remove(D)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){const o=this.elementRef.nativeElement.ownerDocument||document;this._inkBarElement=o.createElement("span"),this._inkBarContentElement=o.createElement("span"),this._inkBarElement.className="mdc-tab-indicator",this._inkBarContentElement.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",this._inkBarElement.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){(this._fitToContent?this.elementRef.nativeElement.querySelector(".mdc-tab__content"):this.elementRef.nativeElement).appendChild(this._inkBarElement)}}}const Mt=(0,_.Id)(class{}),yt=Tt((()=>{class i extends Mt{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,features:[e.qOj]}),i})());let A=(()=>{class i extends yt{}return i.\u0275fac=function(){let o;return function(a){return(o||(o=e.n5z(i)))(a||i)}}(),i.\u0275dir=e.lG2({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,a){2&t&&(e.uIk("aria-disabled",!!a.disabled),e.ekj("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:"disabled",fitInkBarToContent:"fitInkBarToContent"},features:[e.qOj]}),i})();const kt=(0,_.Id)(class{}),O=new e.OlP("MAT_TAB_GROUP");let Ct=(()=>{class i extends kt{get content(){return this._contentPortal}constructor(t,a){super(),this._viewContainerRef=t,this._closestTabGroup=a,this.textLabel="",this._contentPortal=null,this._stateChanges=new v.x,this.position=null,this.origin=null,this.isActive=!1}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new h.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.s_b),e.Y36(O,8))},i.\u0275dir=e.lG2({type:i,viewQuery:function(t,a){if(1&t&&e.Gf(e.Rgc,7),2&t){let n;e.iGM(n=e.CRH())&&(a._implicitContent=n.first)}},inputs:{textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass"},features:[e.qOj,e.TTD]}),i})(),S=(()=>{class i extends Ct{get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}}return i.\u0275fac=function(){let o;return function(a){return(o||(o=e.n5z(i)))(a||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-tab"]],contentQueries:function(t,a,n){if(1&t&&(e.Suo(n,ut,7,e.Rgc),e.Suo(n,ft,5)),2&t){let r;e.iGM(r=e.CRH())&&(a._explicitContent=r.first),e.iGM(r=e.CRH())&&(a.templateLabel=r.first)}},inputs:{disabled:"disabled"},exportAs:["matTab"],features:[e._Bn([{provide:E,useExisting:i}]),e.qOj],ngContentSelectors:w,decls:1,vars:0,template:function(t,a){1&t&&(e.F$t(),e.YNc(0,X,1,0,"ng-template"))},encapsulation:2}),i})();const N=(0,T.i$)({passive:!0});let Dt=(()=>{class i{get disablePagination(){return this._disablePagination}set disablePagination(t){this._disablePagination=(0,m.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=(0,m.su)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}constructor(t,a,n,r,s,c,l){this._elementRef=t,this._changeDetectorRef=a,this._viewportRuler=n,this._dir=r,this._ngZone=s,this._platform=c,this._animationMode=l,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new v.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new v.x,this._disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new e.vpe,this.indexFocused=new e.vpe,s.runOutsideAngular(()=>{(0,y.R)(t.nativeElement,"mouseleave").pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}ngAfterViewInit(){(0,y.R)(this._previousPaginator.nativeElement,"touchstart",N).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,y.R)(this._nextPaginator.nativeElement,"touchstart",N).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:(0,W.of)("ltr"),a=this._viewportRuler.change(150),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new M.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(this._selectedIndex),this._ngZone.onStable.pipe((0,K.q)(1)).subscribe(n),(0,k.T)(t,a,this._items.changes,this._itemsResized()).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),n()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return"function"!=typeof ResizeObserver?G.E:this._items.changes.pipe((0,C.O)(this._items),(0,U.w)(t=>new Y.y(a=>this._ngZone.runOutsideAngular(()=>{const n=new ResizeObserver(r=>a.next(r));return t.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),(0,$.T)(1),(0,Z.h)(t=>t.some(a=>a.contentRect.width>0&&a.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!(0,B.Vb)(t))switch(t.keyCode){case B.K5:case B.L_:if(this.focusIndex!==this.selectedIndex){const a=this._items.get(this.focusIndex);a&&!a.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return!this._items||!!this._items.toArray()[t]}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const a=this._tabListContainer.nativeElement;a.scrollLeft="ltr"==this._getLayoutDirection()?0:a.scrollWidth-a.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,a="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(a)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const a=this._items?this._items.toArray()[t]:null;if(!a)return;const n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:s}=a.elementRef.nativeElement;let c,l;"ltr"==this._getLayoutDirection()?(c=r,l=c+s):(l=this._tabListInner.nativeElement.offsetWidth-r,c=l-s);const x=this.scrollDistance,j=this.scrollDistance+n;c<x?this.scrollDistance-=x-c:l>j&&(this.scrollDistance+=Math.min(l-j,c-x))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabListInner.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,a=t?t.elementRef.nativeElement:null;a?this._inkBar.alignToElement(a):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,a){a&&null!=a.button&&0!==a.button||(this._stopInterval(),(0,Q.H)(650,100).pipe((0,f.R)((0,k.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:n,distance:r}=this._scrollHeader(t);(0===r||r>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const a=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(a,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:a,distance:this._scrollDistance}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.rL),e.Y36(u.Is,8),e.Y36(e.R0b),e.Y36(T.t4),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,inputs:{disablePagination:"disablePagination"}}),i})(),Pt=(()=>{class i extends Dt{get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,m.Ig)(t)}constructor(t,a,n,r,s,c,l){super(t,a,n,r,s,c,l),this._disableRipple=!1}_itemSelected(t){t.preventDefault()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.rL),e.Y36(u.Is,8),e.Y36(e.R0b),e.Y36(T.t4),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,inputs:{disableRipple:"disableRipple"},features:[e.qOj]}),i})(),wt=(()=>{class i extends Pt{constructor(t,a,n,r,s,c,l){super(t,a,n,r,s,c,l)}ngAfterContentInit(){this._inkBar=new vt(this._items),super.ngAfterContentInit()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(I.rL),e.Y36(u.Is,8),e.Y36(e.R0b),e.Y36(T.t4),e.Y36(e.QbO,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,a,n){if(1&t&&e.Suo(n,A,4),2&t){let r;e.iGM(r=e.CRH())&&(a._items=r)}},viewQuery:function(t,a){if(1&t&&(e.Gf(tt,7),e.Gf(et,7),e.Gf(at,7),e.Gf(nt,5),e.Gf(it,5)),2&t){let n;e.iGM(n=e.CRH())&&(a._tabListContainer=n.first),e.iGM(n=e.CRH())&&(a._tabList=n.first),e.iGM(n=e.CRH())&&(a._tabListInner=n.first),e.iGM(n=e.CRH())&&(a._nextPaginator=n.first),e.iGM(n=e.CRH())&&(a._previousPaginator=n.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,a){2&t&&e.ekj("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl","rtl"==a._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[e.qOj],ngContentSelectors:w,decls:13,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-mdc-tab-labels"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,a){1&t&&(e.F$t(),e.TgZ(0,"button",0,1),e.NdJ("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(r){return a._handlePaginatorPress("before",r)})("touchend",function(){return a._stopInterval()}),e._UZ(2,"div",2),e.qZA(),e.TgZ(3,"div",3,4),e.NdJ("keydown",function(r){return a._handleKeydown(r)}),e.TgZ(5,"div",5,6),e.NdJ("cdkObserveContent",function(){return a._onContentChanges()}),e.TgZ(7,"div",7,8),e.Hsn(9),e.qZA()()(),e.TgZ(10,"button",9,10),e.NdJ("mousedown",function(r){return a._handlePaginatorPress("after",r)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),e._UZ(12,"div",2),e.qZA()),2&t&&(e.ekj("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),e.Q6J("matRippleDisabled",a._disableScrollBefore||a.disableRipple)("disabled",a._disableScrollBefore||null),e.xp6(3),e.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),e.xp6(7),e.ekj("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),e.Q6J("matRippleDisabled",a._disableScrollAfter||a.disableRipple)("disabled",a._disableScrollAfter||null))},dependencies:[_.wG,P.wD],styles:[".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable span.mdc-tab-indicator__content,._mat-animation-noopable span.mdc-tab__text-label{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],encapsulation:2}),i})();const H=new e.OlP("MAT_TABS_CONFIG");let Rt=0;const Et=(0,_.pj)((0,_.Kr)(class{constructor(i){this._elementRef=i}}),"primary");let Lt=(()=>{class i extends Et{get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=(0,m.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=(0,m.su)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t+"")?t+"ms":t}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=(0,m.su)(t,null)}get disablePagination(){return this._disablePagination}set disablePagination(t){this._disablePagination=(0,m.Ig)(t)}get preserveContent(){return this._preserveContent}set preserveContent(t){this._preserveContent=(0,m.Ig)(t)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const a=this._elementRef.nativeElement.classList;a.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&a.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}constructor(t,a,n,r){super(t),this._changeDetectorRef=a,this._animationMode=r,this._tabs=new e.n_E,this._indexToSelect=0,this._lastFocusedTabIndex=null,this._tabBodyWrapperHeight=0,this._tabsSubscription=g.w0.EMPTY,this._tabLabelSubscription=g.w0.EMPTY,this._dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this._disablePagination=!1,this._preserveContent=!1,this.selectedIndexChange=new e.vpe,this.focusChange=new e.vpe,this.animationDone=new e.vpe,this.selectedTabChange=new e.vpe(!0),this._groupId=Rt++,this.animationDuration=n&&n.animationDuration?n.animationDuration:"500ms",this.disablePagination=!(!n||null==n.disablePagination)&&n.disablePagination,this.dynamicHeight=!(!n||null==n.dynamicHeight)&&n.dynamicHeight,this.contentTabIndex=n?.contentTabIndex??null,this.preserveContent=!!n?.preserveContent}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const a=null==this._selectedIndex;if(!a){this.selectedTabChange.emit(this._createChangeEvent(t));const n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,r)=>n.isActive=r===t),a||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((a,n)=>{a.position=n-t,null!=this._selectedIndex&&0==a.position&&!a.origin&&(a.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{const t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){const a=this._tabs.toArray();let n;for(let r=0;r<a.length;r++)if(a[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,n=a[r];break}!n&&a[t]&&Promise.resolve().then(()=>{a[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,C.O)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(a=>a._closestTabGroup===this||!a._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){const a=this._tabHeader;a&&(a.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const a=new Ot;return a.index=t,this._tabs&&this._tabs.length&&(a.tab=this._tabs.toArray()[t]),a}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,k.T)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const a=this._tabBodyWrapper.nativeElement;a.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(a.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,a,n){a.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,a){t&&"mouse"!==t&&"touch"!==t&&(this._tabHeader.focusIndex=a)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(H,8),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,inputs:{dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:"contentTabIndex",disablePagination:"disablePagination",preserveContent:"preserveContent",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[e.qOj]}),i})(),At=(()=>{class i extends Lt{get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=(0,m.Ig)(t),this._changeDetectorRef.markForCheck()}get stretchTabs(){return this._stretchTabs}set stretchTabs(t){this._stretchTabs=(0,m.Ig)(t)}constructor(t,a,n,r){super(t,a,n,r),this._fitInkBarToContent=!1,this._stretchTabs=!0,this.fitInkBarToContent=!(!n||null==n.fitInkBarToContent)&&n.fitInkBarToContent}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(H,8),e.Y36(e.QbO,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,a,n){if(1&t&&e.Suo(n,S,5),2&t){let r;e.iGM(r=e.CRH())&&(a._allTabs=r)}},viewQuery:function(t,a){if(1&t&&(e.Gf(ot,5),e.Gf(rt,5)),2&t){let n;e.iGM(n=e.CRH())&&(a._tabBodyWrapper=n.first),e.iGM(n=e.CRH())&&(a._tabHeader=n.first)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:6,hostBindings:function(t,a){2&t&&e.ekj("mat-mdc-tab-group-dynamic-height",a.dynamicHeight)("mat-mdc-tab-group-inverted-header","below"===a.headerPosition)("mat-mdc-tab-group-stretch-tabs",a.stretchTabs)},inputs:{color:"color",disableRipple:"disableRipple",fitInkBarToContent:"fitInkBarToContent",stretchTabs:["mat-stretch-tabs","stretchTabs"]},exportAs:["matTabGroup"],features:[e._Bn([{provide:O,useExisting:i}]),e.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mdc-tab mat-mdc-tab mat-mdc-focus-indicator","role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",3,"id","mdc-tab--active","ngClass","disabled","fitInkBarToContent","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-mdc-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-mdc-tab-body-active","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-mdc-focus-indicator",3,"id","ngClass","disabled","fitInkBarToContent","click","cdkFocusChange"],["tabNode",""],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"ngIf","ngIfElse"],["tabTextLabel",""],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering"]],template:function(t,a){1&t&&(e.TgZ(0,"mat-tab-header",0,1),e.NdJ("indexFocused",function(r){return a._focusChanged(r)})("selectFocusedIndex",function(r){return a.selectedIndex=r}),e.YNc(2,lt,9,17,"div",2),e.qZA(),e.TgZ(3,"div",3,4),e.YNc(5,bt,1,11,"mat-tab-body",5),e.qZA()),2&t&&(e.Q6J("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),e.xp6(2),e.Q6J("ngForOf",a._tabs),e.xp6(1),e.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),e.xp6(2),e.Q6J("ngForOf",a._tabs))},dependencies:[p.mk,p.sg,p.O5,h.Pl,_.wG,M.kH,R,A,wt],styles:['.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab[hidden]{display:none}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-tab.mdc-tab{height:48px;flex-grow:0}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none}.mat-mdc-tab .mdc-tab__text-label{display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-disabled{opacity:.4}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-mdc-tab-header-with-background-background-color, transparent)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab-indicator__content--underline,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{border-color:var(--mat-mdc-tab-header-with-background-foreground-color, inherit)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}'],encapsulation:2}),i})();class Ot{}let St=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,_.BQ,h.eL,_.si,P.Q8,M.rt,_.BQ]}),i})()}}]);