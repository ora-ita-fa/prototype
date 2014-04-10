define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$20$$, $$$$19$$) {
  (function() {
    $oj$$20$$.$__registerWidget$("oj.ojPagingControl", $$$$19$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{data:null, pageSize:25, pageOptions:{layout:["auto"], maxPageLinks:6}, loadMoreOptions:{maxCount:500}, mode:"page"}, $_BUNDLE_KEY$:{$_LABEL_ACC_PAGING$:"labelAccPaging", $_LABEL_ACC_NAV_FIRST_PAGE$:"labelAccNavFirstPage", $_LABEL_ACC_NAV_LAST_PAGE$:"labelAccNavLastPage", $_LABEL_ACC_NAV_NEXT_PAGE$:"labelAccNavNextPage", $_LABEL_ACC_NAV_PREVIOUS_PAGE$:"labelAccNavPreviousPage", 
    $_LABEL_ACC_NAV_PAGE$:"labelAccNavPage", $_LABEL_LOAD_MORE$:"labelLoadMore", $_LABEL_NAV_INPUT_PAGE$:"labelNavInputPage", $_LABEL_NAV_INPUT_PAGE_MAX$:"labelNavInputPageMax", $_LABEL_NAV_INPUT_PAGE_SUMMARY$:"labelNavInputPageSummary", $_MSG_ITEM_RANGE$:"msgItemRange", $_MSG_ITEM_RANGE_UNKNOWN$:"msgItemRangeUnknown", $_TIP_NAV_INPUT_PAGE$:"tipNavInputPage", $_TIP_NAV_PAGE_LINK$:"tipNavPageLink", $_TIP_NAV_NEXT_PAGE$:"tipNavNextPage", $_TIP_NAV_PREVIOUS_PAGE$:"tipNavPreviousPage", $_TIP_NAV_FIRST_PAGE$:"tipNavFirstPage", 
    $_TIP_NAV_LAST_PAGE$:"tipNavLastPage", $_ERR_PAGE_INVALID_SUMMARY$:"pageInvalid.summary", $_ERR_PAGE_INVALID_DETAIL$:"pageInvalid.detail", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail", $_ERR_MAXPAGELINKS_INVALID_SUMMARY$:"maxPageLinksInvalid.summary", $_ERR_MAXPAGELINKS_INVALID_DETAIL$:"maxPageLinksInvalid.detail"}, $_MARKER_STYLE_CLASSES$:{$_WIDGET$:"oj-widget", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon", 
    $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-checked"}, $_CSS_CLASSES$:{$_PAGING_CONTROL_CLASS$:"oj-pagingcontrol", $_PAGING_CONTROL_ACC_LABEL_CLASS$:"oj-pagingcontrol-acc-label", $_PAGING_CONTROL_CONTENT_CLASS$:"oj-pagingcontrol-content", $_PAGING_CONTROL_LOAD_MORE_CLASS$:"oj-pagingcontrol-loadmore", $_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$:"oj-pagingcontrol-loadmore-link", $_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$:"oj-pagingcontrol-loadmore-range", 
    $_PAGING_CONTROL_NAV_CLASS$:"oj-pagingcontrol-nav", $_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$:"oj-pagingcontrol-nav-arrow-section", $_PAGING_CONTROL_NAV_PAGE_CLASS$:"oj-pagingcontrol-nav-page", $_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-page-acc-label", $_PAGING_CONTROL_NAV_LABEL_CLASS$:"oj-pagingcontrol-nav-label", $_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$:"oj-pagingcontrol-nav-input-section", $_PAGING_CONTROL_NAV_INPUT_CLASS$:"oj-pagingcontrol-nav-input", $_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$:"oj-pagingcontrol-nav-input-max", 
    $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$:"oj-pagingcontrol-nav-input-summary", $_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$:"oj-pagingcontrol-nav-pages-section", $_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$:"oj-pagingcontrol-nav-pages-links", $_PAGING_CONTROL_NAV_FIRST_CLASS$:"oj-pagingcontrol-nav-first", $_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-first-acc-label", $_PAGING_CONTROL_NAV_PREVIOUS_CLASS$:"oj-pagingcontrol-nav-previous", $_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-previous-acc-label", 
    $_PAGING_CONTROL_NAV_NEXT_CLASS$:"oj-pagingcontrol-nav-next", $_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-next-acc-label", $_PAGING_CONTROL_NAV_LAST_CLASS$:"oj-pagingcontrol-nav-last", $_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-last-acc-label", $_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$:"oj-pagingcontrol-nav-first-icon", $_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$:"oj-pagingcontrol-nav-previous-icon", $_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$:"oj-pagingcontrol-nav-next-icon", 
    $_PAGING_CONTROL_NAV_LAST_ICON_CLASS$:"oj-pagingcontrol-nav-last-icon", $_WIDGET_ICON_CLASS$:"oj-widget-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"}, $_DATA_ATTR_PAGE_NUM$:"data-oj-pagenum", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_MODE$:{$_LOAD_MORE$:"loadMore", $_PAGE$:"page"}, $_PAGE_OPTION_LAYOUT$:{$_AUTO$:"auto", $_INPUT$:"input", $_RANGE_TEXT$:"rangeText", $_PAGES$:"pages", $_NAV$:"nav"}, firstPage:function() {
      var $data$$130$$ = this.$_getData$();
      if(null != $data$$130$$) {
        try {
          $data$$130$$.fetch({startIndex:0}), this.$_startIndex$ = 0
        }catch($err$$9$$) {
          return!1
        }
        return!0
      }
      return!1
    }, previousPage:function() {
      var $data$$131$$ = this.$_getData$();
      if(null != $data$$131$$) {
        var $page$$ = this.$_getCurrentPage$();
        try {
          this.$_startIndex$ = this.$_getStartIndexForPage$($page$$ - 1), $data$$131$$.fetch({startIndex:this.$_startIndex$})
        }catch($err$$10$$) {
          return!1
        }
        return!0
      }
      return!1
    }, nextPage:function() {
      var $data$$132$$ = this.$_getData$();
      if(null != $data$$132$$) {
        var $page$$1$$ = this.$_getCurrentPage$();
        try {
          this.$_startIndex$ = this.$_getStartIndexForPage$($page$$1$$ + 1), $data$$132$$.fetch({startIndex:this.$_startIndex$})
        }catch($err$$11$$) {
          return!1
        }
        return!0
      }
      return!1
    }, lastPage:function() {
      var $data$$133$$ = this.$_getData$();
      if(null != $data$$133$$) {
        try {
          this.$_startIndex$ = this.$_getStartIndexForPage$(this.$_getTotalPages$()), $data$$133$$.fetch({startIndex:this.$_startIndex$})
        }catch($err$$12$$) {
          return!1
        }
        return!0
      }
      return!1
    }, page:function($page$$2$$) {
      try {
        this.$_startIndex$ = this.$_getStartIndexForPage$($page$$2$$), this.$_getData$().fetch({startIndex:this.$_startIndex$})
      }catch($err$$13$$) {
        return!1
      }
      return!0
    }, loadNext:function() {
      if(null != this.$_getData$()) {
        try {
          this.$_getData$().next()
        }catch($err$$14$$) {
          return!1
        }
        return!0
      }
      return!1
    }, refresh:function() {
      this._super();
      this.$_refresh$()
    }, _init:function() {
      this._super();
      this.$_startIndex$ = 0;
      this.$_registerDataSourceEventListeners$();
      this.$_refresh$()
    }, _create:function() {
      this._super();
      this.$_registerDataSourceEventListeners$();
      this.$_draw$();
      this.$_registerResizeListener$(this.$_getPagingControlContainer$());
      this._on(this.$_events$)
    }, _destroy:$JSCompiler_emptyFn$$(), $_draw$:function() {
      var $options$$311$$ = this.options;
      this.element.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CLASS$);
      this.element.addClass(this.$_MARKER_STYLE_CLASSES$.$_WIDGET$);
      this.element.attr("tabindex", "0");
      this.$_startIndex$ = 0;
      this.$_createPagingControlAccLabel$();
      this.$_createPagingControlContent$();
      $options$$311$$.mode == this.$_MODE$.$_LOAD_MORE$ ? (this.$_createPagingControlLoadMore$(), this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$()) : this.$_createPagingControlNav$();
      null != this.$_getData$() && 0 == this.$_getData$().size() && (this.$_getData$().$setPageSize$($options$$311$$.pageSize), this.$_getData$().fetch({startIndex:this.$_startIndex$}))
    }, $_events$:{"click .oj-pagingcontrol-loadmore-link":function($event$$298$$) {
      this.loadNext();
      $event$$298$$.preventDefault()
    }, "click .oj-pagingcontrol-nav-page":function($event$$299$$) {
      var $pageNum$$ = $$$$19$$($event$$299$$.target).attr("data-oj-pagenum");
      this.page($pageNum$$);
      $event$$299$$.preventDefault()
    }, "click .oj-pagingcontrol-nav-first":function($event$$300$$) {
      this.firstPage();
      $event$$300$$.preventDefault()
    }, "click .oj-pagingcontrol-nav-previous":function($event$$301$$) {
      this.previousPage();
      $event$$301$$.preventDefault()
    }, "click .oj-pagingcontrol-nav-next":function($event$$302$$) {
      this.nextPage();
      $event$$302$$.preventDefault()
    }, "click .oj-pagingcontrol-nav-last":function($event$$303$$) {
      this.lastPage();
      $event$$303$$.preventDefault()
    }, "change .oj-pagingcontrol-nav-input":function($errSummary$$9_event$$304$$) {
      try {
        var $errDetail$$9_pageNum$$1$$ = parseInt($$$$19$$($errSummary$$9_event$$304$$.target).val(), 10);
        this.page($errDetail$$9_pageNum$$1$$)
      }catch($err$$15$$) {
        throw $errSummary$$9_event$$304$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$), $errDetail$$9_pageNum$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_DETAIL$), new $oj$$20$$.$Message$($errSummary$$9_event$$304$$, $errDetail$$9_pageNum$$1$$, $oj$$20$$.$Message$.$SEVERITY_LEVEL$.ERROR);
      }
    }}, $_refresh$:function() {
      if(this.options.mode == this.$_MODE$.$_LOAD_MORE$) {
        var $data$$135$$ = this.$_getData$(), $pagingControlLoadMore$$ = this.$_getPagingControlLoadMore$();
        null != $data$$135$$ && $data$$135$$.size() == $data$$135$$.totalSize() ? $pagingControlLoadMore$$.css("display", "none") : ($pagingControlLoadMore$$.css("display", ""), this.$_refreshPagingControlLoadMoreRange$())
      }else {
        this.$_refreshPagingControlNav$()
      }
    }, _setOption:function($key$$105$$, $value$$200$$) {
      this._super($key$$105$$, $value$$200$$);
      this.$_refresh$()
    }, $_clearCachedDomLoadMoreRange$:function() {
      this.$_cachedDomPagingControlLoadMoreRange$ = null
    }, $_clearCachedDomPagingControlNav$:function() {
      this.$_cachedDomPagingControlNavInputSummary$ = this.$_cachedDomPagingControlNavInput$ = this.$_cachedDomPagingControlNav$ = null
    }, $_getCurrentPage$:function() {
      return 0 == this.$_startIndex$ ? 1 : Math.ceil((this.$_startIndex$ + 1) / this.options.pageSize)
    }, $_getData$:function() {
      if(!this.$_data$ && null != this.options.data) {
        var $data$$136_errSummary$$10$$ = this.options.data;
        if($data$$136_errSummary$$10$$ instanceof $oj$$20$$.$PagingDataSource$ || $data$$136_errSummary$$10$$ instanceof $oj$$20$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$136_errSummary$$10$$
        }else {
          var $data$$136_errSummary$$10$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_DATA_INVALID_TYPE_SUMMARY$), $errDetail$$10$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
          throw new $oj$$20$$.$Message$($data$$136_errSummary$$10$$, $errDetail$$10$$, $oj$$20$$.$Message$.$SEVERITY_LEVEL$.ERROR);
        }
        this.$_data$.$setPageSize$(this.options.pageSize);
        this.$_dataMetadata$ = this.options.data
      }
      return this.$_data$
    }, $_getItemRangeText$:function() {
      var $data$$137$$ = this.$_getData$(), $itemRangeText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE$, this.$_startIndex$, 0, 0);
      null != $data$$137$$ && ($itemRangeText$$ = -1 != $data$$137$$.totalSize() ? this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE$, this.$_startIndex$ + 1, this.$_startIndex$ + $data$$137$$.size(), $data$$137$$.totalSize()) : this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_UNKNOWN$, this.$_startIndex$ + 1, this.$_startIndex$ + $data$$137$$.size()));
      return $itemRangeText$$
    }, $_getMaxPageLinks$:function() {
      return this.options.pageOptions.maxPageLinks
    }, $_getStartIndexForPage$:function($page$$3$$) {
      var $startIndex$$8$$ = ($page$$3$$ - 1) * this.options.pageSize, $totalPages$$ = this.$_getTotalPages$();
      if(0 > $startIndex$$8$$) {
        throw"Value must be greater than 0";
      }
      if(0 < $totalPages$$ && $page$$3$$ > $totalPages$$) {
        throw"Value cannot be greater than the total number of pages";
      }
      return $startIndex$$8$$
    }, $_getTotalPages$:function() {
      var $data$$138$$ = this.$_getData$(), $totalSize$$3$$ = 0;
      null != $data$$138$$ && ($totalSize$$3$$ = $data$$138$$.totalSize());
      return-1 == $totalSize$$3$$ ? -1 : Math.ceil($totalSize$$3$$ / this.options.pageSize)
    }, $_handleDataFetchEnd$:function() {
      this.$_refresh$()
    }, $_refreshPagingControlLoadMoreRange$:function() {
      var $pagingControlLoadMoreRange$$ = this.$_getPagingControlLoadMoreRange$();
      $pagingControlLoadMoreRange$$[0].parentNode.removeChild($pagingControlLoadMoreRange$$[0]);
      this.$_createPagingControlLoadMoreRange$();
      this.$_clearCachedDomLoadMoreRange$()
    }, $_refreshPagingControlNav$:function() {
      var $elementWidth_pageOptionLayout$$ = this.options.pageOptions.layout;
      this.$_getPagingControlContent$().empty();
      this.$_clearCachedDomPagingControlNav$();
      this.$_createPagingControlNav$();
      this.$_refreshPagingControlNavArrows$();
      if(-1 < $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $elementWidth_pageOptionLayout$$)) {
        var $elementWidth_pageOptionLayout$$ = this.element.width(), $pagingControlNavArrowSection$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavInputSection_pagingControlNavWidth$$ = this.$_getPagingControlNavInputSection$(), $pagingControlNavPageLinks$$ = this.$_getPagingControlNavPageLinks$(), $pagingControlNavInputSummary$$ = this.$_getPagingControlNavInputSummary$(), $pagingControlNavInputSection_pagingControlNavWidth$$ = $pagingControlNavArrowSection$$[0].offsetWidth + $pagingControlNavInputSection_pagingControlNavWidth$$[0].offsetWidth;
        $pagingControlNavInputSection_pagingControlNavWidth$$ > $elementWidth_pageOptionLayout$$ ? $pagingControlNavInputSection_pagingControlNavWidth$$ - $pagingControlNavPageLinks$$.width() <= $elementWidth_pageOptionLayout$$ ? $pagingControlNavPageLinks$$.css("display", "none") : $pagingControlNavInputSection_pagingControlNavWidth$$ - $pagingControlNavPageLinks$$.width() - $pagingControlNavInputSummary$$.width() <= $elementWidth_pageOptionLayout$$ ? ($pagingControlNavPageLinks$$.css("display", 
        "none"), $pagingControlNavInputSummary$$.css("display", "none")) : ($pagingControlNavPageLinks$$.css("display", "none"), $pagingControlNavInputSummary$$.css("display", "none"), $pagingControlNavArrowSection$$.css("display", "none")) : 0 < $pagingControlNavInputSection_pagingControlNavWidth$$ && ($pagingControlNavPageLinks$$.css("display", ""), $pagingControlNavInputSummary$$.css("display", ""), $pagingControlNavArrowSection$$.css("display", ""))
      }
    }, $_refreshPagingControlNavArrows$:function() {
      var $pagingControlNavArrowSection$$1_pagingControlNavNext$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$);
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$19$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 1 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : 
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$19$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 1 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$19$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() ? 
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)));
      ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)) && 0 < $pagingControlNavArrowSection$$1_pagingControlNavNext$$.length && ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $$$$19$$($pagingControlNavArrowSection$$1_pagingControlNavNext$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() ? ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$)))
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$139$$ = this.$_getData$();
      if(null != $data$$139$$) {
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$20$$.$PagingDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        var $i$$271$$;
        for($i$$271$$ = 0;$i$$271$$ < this.$_dataSourceEventHandlers$.length;$i$$271$$++) {
          $data$$139$$.on(this.$_dataSourceEventHandlers$[$i$$271$$].eventType, this.$_dataSourceEventHandlers$[$i$$271$$].eventHandler)
        }
      }
    }, $_registerResizeListener$:function($element$$68$$) {
      if(!this.$_isResizeListenerAdded$) {
        var $self$$102$$ = this;
        $oj$$20$$.$DomUtils$.$addResizeListener$($element$$68$$[0], function() {
          $self$$102$$.$_refresh$()
        });
        this.$_isResizeListenerAdded$ = !0
      }
    }, $_createAccLabelSpan$:function($text$$13$$, $className$$12$$) {
      var $accLabel$$ = $$$$19$$(document.createElement("span"));
      $accLabel$$.addClass($className$$12$$);
      $accLabel$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accLabel$$.append($text$$13$$);
      return $accLabel$$
    }, $_createPagingControlAccLabel$:function() {
      var $pagingControlContainer$$ = this.$_getPagingControlContainer$(), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_PAGING$), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$_createAccLabelSpan$($pagingControlAccLabel_pagingControlAccLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$), $pagingControlAccLabelId$$ = this.element.attr("id") + "_oj_pgCtrl_acc_label";
      $pagingControlAccLabel_pagingControlAccLabelText$$.attr("id", $pagingControlAccLabelId$$);
      $pagingControlContainer$$.append($pagingControlAccLabel_pagingControlAccLabelText$$);
      return $pagingControlAccLabel_pagingControlAccLabelText$$
    }, $_createPagingControlAccNavPageLabel$:function() {
      var $pagingControlAccNavPageLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPageLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$)
    }, $_createPagingControlAccNavFirstLabel$:function() {
      var $pagingControlAccNavFirstLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_FIRST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavFirstLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$)
    }, $_createPagingControlAccNavLastLabel$:function() {
      var $pagingControlAccNavLastLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_LAST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavLastLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$)
    }, $_createPagingControlAccNavNextLabel$:function() {
      var $pagingControlAccNavNextLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_NEXT_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavNextLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$)
    }, $_createPagingControlAccNavPreviousLabel$:function() {
      var $pagingControlAccNavPreviousLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PREVIOUS_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPreviousLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$)
    }, $_createPagingControlContent$:function() {
      var $pagingControlContainer$$1$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$1$$ = $$$$19$$(document.createElement("div"));
      $pagingControlContent$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$);
      var $pagingControlAccLabelId$$1$$ = this.$_getPagingControlAccLabel$().attr("id");
      $pagingControlContent$$1$$.attr("role", "navigation");
      $pagingControlContent$$1$$.attr("aria-labelledby", $pagingControlAccLabelId$$1$$);
      $pagingControlContainer$$1$$.append($pagingControlContent$$1$$);
      return $pagingControlContent$$1$$
    }, $_createPagingControlLoadMore$:function() {
      var $pagingControlContent$$2$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$1$$ = $$$$19$$(document.createElement("div"));
      $pagingControlLoadMore$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$);
      $pagingControlContent$$2$$.append($pagingControlLoadMore$$1$$);
      return $pagingControlLoadMore$$1$$
    }, $_createPagingControlLoadMoreLink$:function() {
      var $pagingControlLoadMore$$2$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$ = $$$$19$$(document.createElement("a"));
      $pagingControlLoadMoreLink$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$);
      var $loadMoreText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE$);
      $pagingControlLoadMoreLink$$.append($loadMoreText$$);
      $pagingControlLoadMoreLink$$.attr("tabindex", "0");
      $pagingControlLoadMoreLink$$.attr("href", "#");
      $pagingControlLoadMore$$2$$.append($pagingControlLoadMoreLink$$);
      return $pagingControlLoadMoreLink$$
    }, $_createPagingControlLoadMoreRange$:function() {
      this.$_getData$();
      var $pagingControlLoadMore$$3$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$1$$ = $$$$19$$(document.createElement("span"));
      $pagingControlLoadMoreRange$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$);
      var $loadMoreRangeText$$ = this.$_getItemRangeText$();
      $pagingControlLoadMoreRange$$1$$.append($loadMoreRangeText$$);
      $pagingControlLoadMore$$3$$.append($pagingControlLoadMoreRange$$1$$);
      return $pagingControlLoadMoreRange$$1$$
    }, $_createPagingControlNav$:function() {
      var $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = this.options.pageOptions.layout;
      null == $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ && ($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = [this.$_PAGE_OPTION_LAYOUT$.$_AUTO$]);
      var $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = this.$_getPagingControlContent$(), $pagingControlNav$$ = $$$$19$$(document.createElement("div"));
      $pagingControlNav$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$);
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pagingControlNav$$);
      if(-1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_INPUT$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = $$$$19$$(document.createElement("div"));
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$);
        $pagingControlNav$$.append($pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$);
        var $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$19$$(document.createElement("label"));
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LABEL_CLASS$);
        var $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE$);
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$);
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$);
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = $$$$19$$(document.createElement("input"));
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$);
        var $navInputPageTip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_INPUT_PAGE$);
        this._focusable(this.element);
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.attr("title", $navInputPageTip$$);
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.attr("tabindex", "0");
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.val(this.$_getCurrentPage$());
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$);
        0 < this.$_getTotalPages$() && ($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$19$$(document.createElement("span")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$), 
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, this.$_getTotalPages$()), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$));
        if(-1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_RANGE_TEXT$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
          $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$19$$(document.createElement("span")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$), 
          $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$_getItemRangeText$(), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_SUMMARY$, 
          $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), 
          $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$)
        }
      }
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = $$$$19$$(document.createElement("div"));
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$);
      $pagingControlNav$$.append($pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$);
      if(-1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$19$$(document.createElement("a")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_FIRST_PAGE$), this._hoverable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        this._focusable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", 
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", "0"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("href", 
        "#"), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavFirstLabel$(), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        $$$$19$$(document.createElement("a")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PREVIOUS_PAGE$), this._hoverable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this._focusable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", 
        "0"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("href", "#"), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavPreviousLabel$(), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$)
      }
      if(-1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_PAGES$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$19$$(document.createElement("div")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this.$_createPagingControlNavPages$($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$, 
        this.$_getMaxPageLinks$())
      }
      if(-1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$19$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$19$$(document.createElement("a")), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_NEXT_PAGE$), this._hoverable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("tabindex", "0"), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$_createPagingControlAccNavNextLabel$(), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$19$$(document.createElement("a")), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ICON_CLASS$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_LAST_PAGE$), this._hoverable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("tabindex", "0"), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$_createPagingControlAccNavLastLabel$(), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)
      }
      return $pagingControlNav$$
    }, $_createPagingControlNavPages$:function($parentDiv$$, $numLinks$$) {
      if(5 > $numLinks$$) {
        var $errSummary$$11_pagingControlNavPagesLinks$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_SUMMARY$), $errDetail$$11_totalPages$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_DETAIL$);
        throw new $oj$$20$$.$Message$($errSummary$$11_pagingControlNavPagesLinks$$, $errDetail$$11_totalPages$$1$$, $oj$$20$$.$Message$.$SEVERITY_LEVEL$.ERROR);
      }
      $errSummary$$11_pagingControlNavPagesLinks$$ = $$$$19$$(document.createElement("div"));
      $errSummary$$11_pagingControlNavPagesLinks$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$);
      $parentDiv$$.append($errSummary$$11_pagingControlNavPagesLinks$$);
      var $errDetail$$11_totalPages$$1$$ = this.$_getTotalPages$(), $currentPage_pageAfterCurrent_pageNum$$2$$ = this.$_getCurrentPage$(), $i$$272_numPagesToAdd$$ = $numLinks$$, $pageList$$ = [];
      if(1 <= $currentPage_pageAfterCurrent_pageNum$$2$$) {
        if(-1 != $errDetail$$11_totalPages$$1$$ && $errDetail$$11_totalPages$$1$$ <= $i$$272_numPagesToAdd$$) {
          for($i$$272_numPagesToAdd$$ = $pageList$$[0] = 1;$i$$272_numPagesToAdd$$ < $errDetail$$11_totalPages$$1$$;$i$$272_numPagesToAdd$$++) {
            $pageList$$[$i$$272_numPagesToAdd$$] = $i$$272_numPagesToAdd$$ + 1
          }
        }else {
          $pageList$$.push(1);
          1 != $currentPage_pageAfterCurrent_pageNum$$2$$ && $pageList$$.push($currentPage_pageAfterCurrent_pageNum$$2$$);
          $currentPage_pageAfterCurrent_pageNum$$2$$ != $errDetail$$11_totalPages$$1$$ && -1 != $errDetail$$11_totalPages$$1$$ && $pageList$$.push($errDetail$$11_totalPages$$1$$);
          var $i$$272_numPagesToAdd$$ = $i$$272_numPagesToAdd$$ - $pageList$$.length, $pageBeforeCurrent$$ = $currentPage_pageAfterCurrent_pageNum$$2$$ - 1, $numPagesAfterCurrent$$ = 1;
          if($currentPage_pageAfterCurrent_pageNum$$2$$ == $errDetail$$11_totalPages$$1$$ || $currentPage_pageAfterCurrent_pageNum$$2$$ == $errDetail$$11_totalPages$$1$$ - 1) {
            $numPagesAfterCurrent$$ = 0
          }
          for(;$i$$272_numPagesToAdd$$ > $numPagesAfterCurrent$$ && 1 < $pageBeforeCurrent$$;) {
            $pageList$$.push($pageBeforeCurrent$$), $pageBeforeCurrent$$--, $i$$272_numPagesToAdd$$--
          }
          $currentPage_pageAfterCurrent_pageNum$$2$$ += 1;
          for(-1 == $errDetail$$11_totalPages$$1$$ && ($i$$272_numPagesToAdd$$ = 1);0 < $i$$272_numPagesToAdd$$ && ($currentPage_pageAfterCurrent_pageNum$$2$$ <= $errDetail$$11_totalPages$$1$$ || -1 == $errDetail$$11_totalPages$$1$$);) {
            $pageList$$.push($currentPage_pageAfterCurrent_pageNum$$2$$), $currentPage_pageAfterCurrent_pageNum$$2$$++, $i$$272_numPagesToAdd$$--
          }
        }
        $pageList$$.sort(function($a$$63$$, $b$$48$$) {
          return $a$$63$$ - $b$$48$$
        });
        for($i$$272_numPagesToAdd$$ = 0;$i$$272_numPagesToAdd$$ < $pageList$$.length;$i$$272_numPagesToAdd$$++) {
          $currentPage_pageAfterCurrent_pageNum$$2$$ = $pageList$$[$i$$272_numPagesToAdd$$], this.$_createPagingControlNavPage$($errSummary$$11_pagingControlNavPagesLinks$$, $currentPage_pageAfterCurrent_pageNum$$2$$), $i$$272_numPagesToAdd$$ != $pageList$$.length - 1 && $currentPage_pageAfterCurrent_pageNum$$2$$ != $pageList$$[$i$$272_numPagesToAdd$$ + 1] - 1 && this.$_createPagingControlNavPage$($errSummary$$11_pagingControlNavPagesLinks$$, -1)
        }
        -1 == $errDetail$$11_totalPages$$1$$ && this.$_createPagingControlNavPage$($errSummary$$11_pagingControlNavPagesLinks$$, -1)
      }
      return $errSummary$$11_pagingControlNavPagesLinks$$
    }, $_createPagingControlNavPage$:function($parentDiv$$1$$, $pageNum$$3$$) {
      var $accPageLabel_currentPage$$1_pageTitle$$ = this.$_getCurrentPage$(), $pagingControlNavPage$$ = null;
      -1 == $pageNum$$3$$ ? ($pagingControlNavPage$$ = $$$$19$$(document.createElement("span")), $pagingControlNavPage$$.append("...")) : ($accPageLabel_currentPage$$1_pageTitle$$ == $pageNum$$3$$ ? ($pagingControlNavPage$$ = $$$$19$$(document.createElement("div")), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : 
      ($pagingControlNavPage$$ = $$$$19$$(document.createElement("a")), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)), $pagingControlNavPage$$.attr("data-oj-pagenum", $pageNum$$3$$), $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$), 
      $accPageLabel_currentPage$$1_pageTitle$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PAGE_LINK$, $pageNum$$3$$.toString()), this._hoverable($pagingControlNavPage$$), this._focusable($pagingControlNavPage$$), $pagingControlNavPage$$.attr("title", $accPageLabel_currentPage$$1_pageTitle$$), $pagingControlNavPage$$.attr("tabindex", "0"), $pagingControlNavPage$$.attr("href", "#"), $accPageLabel_currentPage$$1_pageTitle$$ = this.$_createPagingControlAccNavPageLabel$(), $pagingControlNavPage$$.append($accPageLabel_currentPage$$1_pageTitle$$), 
      $pagingControlNavPage$$.append($pageNum$$3$$.toString()), this._hoverable($pagingControlNavPage$$));
      $parentDiv$$1$$.append($pagingControlNavPage$$);
      return $pagingControlNavPage$$
    }, $_getPagingControlAccLabel$:function() {
      var $pagingControlContainer$$2$$ = this.$_getPagingControlContainer$(), $pagingControlContentAccLabel$$ = null;
      $pagingControlContainer$$2$$ && ($pagingControlContentAccLabel$$ = $pagingControlContainer$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$)) && 0 < $pagingControlContentAccLabel$$.length && ($pagingControlContentAccLabel$$ = $$$$19$$($pagingControlContentAccLabel$$.get(0)));
      return $pagingControlContentAccLabel$$
    }, $_getPagingControlContainer$:function() {
      return $$$$19$$(this.element)
    }, $_getPagingControlContent$:function() {
      if(!this.$_cachedDomPagingControlContent$) {
        var $pagingControlContainer$$3$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$4$$ = null;
        $pagingControlContainer$$3$$ && ($pagingControlContent$$4$$ = $pagingControlContainer$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$)) && 0 < $pagingControlContent$$4$$.length && (this.$_cachedDomPagingControlContent$ = $$$$19$$($pagingControlContent$$4$$.get(0)))
      }
      return this.$_cachedDomPagingControlContent$
    }, $_getPagingControlLoadMore$:function() {
      if(!this.$_cachedDomPagingControlLoadMore$) {
        var $pagingControlContent$$5$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$4$$ = null;
        $pagingControlContent$$5$$ && ($pagingControlLoadMore$$4$$ = $pagingControlContent$$5$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$)) && 0 < $pagingControlLoadMore$$4$$.length && (this.$_cachedDomPagingControlLoadMore$ = $$$$19$$($pagingControlLoadMore$$4$$.get(0)))
      }
      return this.$_cachedDomPagingControlLoadMore$
    }, $_getPagingControlLoadMoreLink$:function() {
      if(!this.$_cachedDomPagingControlLoadMoreLink$) {
        var $pagingControlLoadMore$$5$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$1$$ = null;
        $pagingControlLoadMore$$5$$ && ($pagingControlLoadMoreLink$$1$$ = $pagingControlLoadMore$$5$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)) && 0 < $pagingControlLoadMoreLink$$1$$.length && (this.$_cachedDomPagingControlLoadMoreLink$ = $$$$19$$($pagingControlLoadMoreLink$$1$$.get(0)))
      }
      return this.$_cachedDomPagingControlLoadMoreLink$
    }, $_getPagingControlLoadMoreRange$:function() {
      if(!this.$_cachedDomPagingControlLoadMoreRange$) {
        var $pagingControlLoadMore$$6$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$2$$ = null;
        $pagingControlLoadMore$$6$$ && ($pagingControlLoadMoreRange$$2$$ = $pagingControlLoadMore$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)) && 0 < $pagingControlLoadMoreRange$$2$$.length && (this.$_cachedDomPagingControlLoadMoreRange$ = $$$$19$$($pagingControlLoadMoreRange$$2$$.get(0)))
      }
      return this.$_cachedDomPagingControlLoadMoreRange$
    }, $_getPagingControlNav$:function() {
      if(!this.$_cachedDomPagingControlNav$) {
        var $pagingControlContent$$6$$ = this.$_getPagingControlContent$(), $pagingControlNav$$1$$ = null;
        $pagingControlContent$$6$$ && ($pagingControlNav$$1$$ = $pagingControlContent$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$)) && 0 < $pagingControlNav$$1$$.length && (this.$_cachedDomPagingControlNav$ = $$$$19$$($pagingControlNav$$1$$.get(0)))
      }
      return this.$_cachedDomPagingControlNav$
    }, $_getPagingControlNavInput$:function() {
      if(!this.$_cachedDomPagingControlNavInput$) {
        var $pagingControlNav$$2$$ = this.$_getPagingControlNav$(), $pagingControlNavInput$$1$$ = null;
        $pagingControlNav$$2$$ && ($pagingControlNavInput$$1$$ = $pagingControlNav$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)) && 0 < $pagingControlNavInput$$1$$.length && (this.$_cachedDomPagingControlNavInput$ = $$$$19$$($pagingControlNavInput$$1$$.get(0)))
      }
      return this.$_cachedDomPagingControlNavInput$
    }, $_getPagingControlNavInputSummary$:function() {
      if(!this.$_cachedDomPagingControlNavInputSummary$) {
        var $pagingControlNav$$3$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSummary$$1$$ = null;
        $pagingControlNav$$3$$ && ($pagingControlNavInputSummary$$1$$ = $pagingControlNav$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)) && 0 < $pagingControlNavInputSummary$$1$$.length && (this.$_cachedDomPagingControlNavInputSummary$ = $$$$19$$($pagingControlNavInputSummary$$1$$.get(0)))
      }
      return this.$_cachedDomPagingControlNavInputSummary$
    }, $_getPagingControlNavPageLinks$:function() {
      var $pagingControlNav$$4$$ = this.$_getPagingControlNav$(), $pagingControlNavPageLinks$$1$$ = null;
      $pagingControlNav$$4$$ && ($pagingControlNavPageLinks$$1$$ = $pagingControlNav$$4$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$)) && 0 < $pagingControlNavPageLinks$$1$$.length && ($pagingControlNavPageLinks$$1$$ = $$$$19$$($pagingControlNavPageLinks$$1$$.get(0)));
      return $pagingControlNavPageLinks$$1$$
    }, $_getPagingControlNavArrowSection$:function() {
      var $pagingControlNav$$5$$ = this.$_getPagingControlNav$(), $pagingControlNavArrowSection$$3$$ = null;
      $pagingControlNav$$5$$ && ($pagingControlNavArrowSection$$3$$ = $pagingControlNav$$5$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$)) && 0 < $pagingControlNavArrowSection$$3$$.length && ($pagingControlNavArrowSection$$3$$ = $$$$19$$($pagingControlNavArrowSection$$3$$.get(0)));
      return $pagingControlNavArrowSection$$3$$
    }, $_getPagingControlNavInputSection$:function() {
      var $pagingControlNav$$6$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSection$$2$$ = null;
      $pagingControlNav$$6$$ && ($pagingControlNavInputSection$$2$$ = $pagingControlNav$$6$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$)) && 0 < $pagingControlNavInputSection$$2$$.length && ($pagingControlNavInputSection$$2$$ = $$$$19$$($pagingControlNavInputSection$$2$$.get(0)));
      return $pagingControlNavInputSection$$2$$
    }})
  })();
  $oj$$20$$.$PagingDataSource$ = function $$oj$$20$$$$PagingDataSource$$($dataSource$$8$$) {
    this.$dataSource$ = $dataSource$$8$$;
    this.$Init$()
  };
  $goog$exportPath_$$("PagingDataSource", $oj$$20$$.$PagingDataSource$, $oj$$20$$);
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$PagingDataSource$, $oj$$20$$.$DataSource$, "oj.PagingDataSource");
  $oj$$20$$.$PagingDataSource$.prototype.$Init$ = function $$oj$$20$$$$PagingDataSource$$$$Init$$() {
    $oj$$20$$.$PagingDataSource$.$superclass$.$Init$.call(this)
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.Init", {$Init$:$oj$$20$$.$PagingDataSource$.prototype.$Init$});
  $oj$$20$$.$PagingDataSource$.prototype.fetch = function $$oj$$20$$$$PagingDataSource$$$fetch$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.fetch", {fetch:$oj$$20$$.$PagingDataSource$.prototype.fetch});
  $oj$$20$$.$PagingDataSource$.prototype.hasMore = function $$oj$$20$$$$PagingDataSource$$$hasMore$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$();
    return!1
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.hasMore", {hasMore:$oj$$20$$.$PagingDataSource$.prototype.hasMore});
  $oj$$20$$.$PagingDataSource$.prototype.next = function $$oj$$20$$$$PagingDataSource$$$next$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.next", {next:$oj$$20$$.$PagingDataSource$.prototype.next});
  $oj$$20$$.$PagingDataSource$.prototype.previous = function $$oj$$20$$$$PagingDataSource$$$previous$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.previous", {previous:$oj$$20$$.$PagingDataSource$.prototype.previous});
  $oj$$20$$.$PagingDataSource$.prototype.$setPageSize$ = function $$oj$$20$$$$PagingDataSource$$$$setPageSize$$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$()
  };
  $oj$$20$$.$PagingDataSource$.prototype.startIndex = function $$oj$$20$$$$PagingDataSource$$$startIndex$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.startIndex", {startIndex:$oj$$20$$.$PagingDataSource$.prototype.startIndex});
  $oj$$20$$.$PagingDataSource$.prototype.size = function $$oj$$20$$$$PagingDataSource$$$size$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.size", {size:$oj$$20$$.$PagingDataSource$.prototype.size});
  $oj$$20$$.$PagingDataSource$.prototype.totalSize = function $$oj$$20$$$$PagingDataSource$$$totalSize$() {
    $oj$$20$$.$Assert$.$failedInAbstractFunction$();
    return 0
  };
  $oj$$20$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.totalSize", {totalSize:$oj$$20$$.$PagingDataSource$.prototype.totalSize});
  $oj$$20$$.$PagingDataSource$.$EventType$ = {SYNC:"sync"};
  $goog$exportPath_$$("PagingDataSource.EventType", $oj$$20$$.$PagingDataSource$.$EventType$, $oj$$20$$)
});
