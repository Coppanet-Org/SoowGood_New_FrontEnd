import{E as V,F as E,a as g,d as h,e as k,f as d,o as z}from"./chunk-QYZGMTSF.js";import{Da as f,M as b,Pb as R,R as w,S,U as a,Y as C,Z as D,c as _,d as c,i as p,s as m,ua as x,v as y,x as v,za as u}from"./chunk-PJQ4EZIT.js";var O=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(t=!1,o,e=!0,i){this._multiple=t,this._emitChanges=e,this.compareWith=i,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new c,o&&o.length&&(t?o.forEach(n=>this._markSelected(n)):this._markSelected(o[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(e=>this._markSelected(e));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}deselect(...t){this._verifyValueAssignment(t),t.forEach(e=>this._unmarkSelected(e));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}setSelection(...t){this._verifyValueAssignment(t);let o=this.selected,e=new Set(t);t.forEach(n=>this._markSelected(n)),o.filter(n=>!e.has(this._getConcreteValue(n,e))).forEach(n=>this._unmarkSelected(n));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let o=this._hasQueuedChanges();return t&&this._emitChangeEvent(),o}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,o){if(this.compareWith){o=o??this._selection;for(let e of o)if(this.compareWith(t,e))return e;return t}else return t}};var M=20,B=(()=>{let t=class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new c,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=M){return this._platform.isBrowser?new _(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(v(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):p()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(y(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=z(i),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return m(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};t.\u0275fac=function(i){return new(i||t)(a(f),a(g),a(R,8))},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),xe=(()=>{let t=class t{constructor(e,i,n,r){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=n,this.dir=r,this._destroyed=new c,this._elementScrolled=new _(l=>this.ngZone.runOutsideAngular(()=>m(this.elementRef.nativeElement,"scroll").pipe(b(this._destroyed)).subscribe(l)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=n?e.end:e.start),e.right==null&&(e.right=n?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),n&&d()!=h.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),d()==h.INVERTED?e.left=e.right:d()==h.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;k()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",n="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let l=this.dir&&this.dir.value=="rtl";return e=="start"?e=l?n:i:e=="end"&&(e=l?i:n),l&&d()==h.INVERTED?e==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:l&&d()==h.NEGATED?e==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}};t.\u0275fac=function(i){return new(i||t)(u(x),u(B),u(f),u(V,8))},t.\u0275dir=D({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0});let s=t;return s})(),L=20,ke=(()=>{let t=class t{constructor(e,i,n){this._platform=e,this._change=new c,this._changeListener=r=>{this._change.next(r)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),l=-r.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,I=-r.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:l,left:I}}change(e=L){return e>0?this._change.pipe(v(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}};t.\u0275fac=function(i){return new(i||t)(a(g),a(f),a(R,8))},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var T=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=S({});let s=t;return s})(),ze=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=C({type:t}),t.\u0275inj=S({imports:[E,T,E,T]});let s=t;return s})();export{O as a,B as b,xe as c,ke as d,T as e,ze as f};
