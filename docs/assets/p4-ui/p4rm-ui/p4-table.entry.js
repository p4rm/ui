import { h, r as registerInstance, e as createEvent, f as Host, g as getElement } from './index-4fe82ab4.js';
import { a as debounce } from './utils-05960cfc.js';

function renderEmptyData() {
  return h("div", { class: "empty-data" },
    h("div", { class: "empty-image" },
      h("svg", { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg" },
        h("g", { transform: "translate(0 1)", fill: "none", "fill-rule": "evenodd" },
          h("ellipse", { fill: "#F5F5F5", cx: "32", cy: "33", rx: "32", ry: "7" }),
          h("g", { "fill-rule": "nonzero", stroke: "#D9D9D9" },
            h("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }),
            h("path", { d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", fill: "#FAFAFA" }))))),
    h("p", { class: "empty-image-description" }, "No Data"));
}

const p4TableCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.grid-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:var(--font-size-5, 1rem);font-weight:var(--font-weight-regular, 400);letter-spacing:var(--letter-spacing-solid, 0em);border:1px solid var(--color-gray-3, #dcdbe2);height:100%}.grid-component .list-scroll-wrapper{position:relative;overflow:auto;height:100%;width:100%;min-height:20em}.grid-component .list-scroll-wrapper .header{position:absolute;left:0;top:0;z-index:100}.grid-component .list-scroll-wrapper .body{position:absolute;padding-top:100px}.grid-component .list-scroll-wrapper .body-container{position:relative}.grid-component .list-scroll-wrapper .left-panel{position:absolute}.grid-component .list-scroll-wrapper .table{display:table;line-height:normal}.grid-component .list-scroll-wrapper .table .row{display:table-row;line-height:normal}.grid-component .list-scroll-wrapper .table .col{display:table-cell;margin:0;border-right:1px solid var(--color-gray-3, #dcdbe2);border-bottom:1px solid var(--color-gray-3, #dcdbe2);padding:12px;line-height:normal}.grid-component .list-scroll-wrapper .header .col{background:#fafafa}.grid-component .list-scroll-wrapper .body .row .col{cursor:pointer;background:white}.grid-component .list-scroll-wrapper .body .row .col .col-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.grid-component .list-scroll-wrapper .body .row .col.col-hover{background:#e6f7ff}.grid-component .list-scroll-wrapper .right-panel .table{width:100%;table-layout:fixed}.grid-component .list-scroll-wrapper .right-panel .table .col:last-child{border-right:none}.grid-component .list-scroll-wrapper .empty-data{text-align:center;position:absolute;margin:auto;top:46px;right:0;bottom:0;left:0;border-radius:3px;height:max-content;color:var(--color-gray-6, #9f9eb2)}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}";

const DEFAULT_CELL_WIDTH = 300;
const CHECKBOX_WIDTH = '3rem';
const P4Table = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4CellClick = createEvent(this, "p4CellClick", 7);
    this.p4SelectChange = createEvent(this, "p4SelectChange", 7);
    this.isSelectAll = false;
    /**
     * Grid columns configuration.
     * [
     * {
     *   "name":"name",
     *   "label":"Name",
     *   "width":300,
     *   "fixed":true
     *  },
     * {
     *   "name":"age",
     *   "label":"Age"
     * }
     * ]
     */
    this.columns = [];
    /**
     * Grid data to display on table
     * [{
     *  'id': '5e7118ddce4b3d577956457f',
     *  'age': 21,
     *  'name': 'John',
     *  'company': 'India',
     *  'email': 'john@example.com',
     *  'phone': '+1 (839) 560-3581',
     *  'address': '326 Irving Street, Grimsley, Texas, 4048'
     *  }]
     */
    this.dataSource = [];
    this.selectedRowKeys = [];
    this.keyField = 'id';
    this.onSelectAllClick = () => {
      let selectedRowKeys = [];
      this.isSelectAll = !this.isSelectAll;
      if (this.isSelectAll)
        selectedRowKeys = this.dataSource.map((row) => row[this.keyField]);
      this.onSelectChange(selectedRowKeys);
    };
    this.onRowSelectClick = (row) => {
      let selectedRowKeys = [...this.selectedRowKeys];
      if (selectedRowKeys.includes(row[this.keyField])) {
        this.isSelectAll = false;
        selectedRowKeys = selectedRowKeys.filter((rowId) => rowId !== row[this.keyField]);
      }
      else {
        selectedRowKeys.push(row[this.keyField]);
      }
      this.onSelectChange(selectedRowKeys);
    };
    this.onCellMouseOver = (row) => {
      this.hoverRecord = row;
    };
    this.handleScroll = debounce(() => {
      const $root = this.el.shadowRoot;
      const $header = $root.querySelector('.header');
      const $headerRightPanel = $header.querySelector('.right-panel');
      const $leftPanels = $root.querySelectorAll('.left-panel');
      const $listScrollWrapper = $root.querySelector('.list-scroll-wrapper');
      const movedBy = $listScrollWrapper.getBoundingClientRect().x - $headerRightPanel.getBoundingClientRect().x;
      $leftPanels.forEach(function ($leftPanel) {
        $leftPanel.style.left = movedBy + 'px';
      });
      const $body = $root.querySelector('.body');
      if ($body)
        $header.style.top = ($listScrollWrapper.getBoundingClientRect().y - $body.getBoundingClientRect().y) + 'px';
    }, 10);
  }
  onSelectChange(selectedRowKeys) {
    console.log(selectedRowKeys);
    this.selectedRowKeys = selectedRowKeys;
    this.p4SelectChange.emit({ value: this.selectedRowKeys });
  }
  onCellClick(row, col) {
    this.p4CellClick.emit({ record: row, column: col });
  }
  componentDidRender() {
    const $root = this.el.shadowRoot;
    const $headerPanel = $root.querySelector('.header');
    const $headerLeftPanel = $headerPanel.querySelector('.left-panel');
    const $headerRightPanel = $headerPanel.querySelector('.right-panel');
    let leftPanelWidth = $headerLeftPanel.clientWidth;
    $headerRightPanel.style.paddingLeft = leftPanelWidth + 'px';
    if (this.dataSource && this.dataSource.length) {
      const $bodyPanel = $root.querySelector('.body');
      const $bodyRightPanel = $bodyPanel.querySelector('.right-panel');
      $bodyRightPanel.style.paddingLeft = leftPanelWidth + 'px';
      $bodyPanel.style.paddingTop = $headerPanel.clientHeight + 'px';
    }
  }
  renderHeader() {
    const leftHeaderRow = [];
    const rightHeaderRow = [];
    if (this.selectionType === 'checkbox') {
      leftHeaderRow.push(h("div", { class: "col", style: { width: CHECKBOX_WIDTH } }, h("p4-checkbox", { class: "checkbox", size: "sm", value: this.isSelectAll, onP4Change: this.onSelectAllClick })));
    }
    this.columns.forEach((col) => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width)
        colWidth = parseInt(col.width);
      const colEl = h("div", { class: "col", style: { width: colWidth + 'px', maxWidth: colWidth + 'px' } }, col.label);
      (col.fixed) ? leftHeaderRow.push(colEl) : rightHeaderRow.push(colEl);
    });
    return h("div", { class: "header" }, h("div", { class: "left-panel" }, h("div", { class: "table" }, h("div", { class: "row" }, leftHeaderRow))), h("div", { class: "right-panel" }, h("div", { class: "table" }, h("div", { class: "row" }, rightHeaderRow))));
  }
  renderBody() {
    const rightBodyRows = [];
    const leftBodyRows = [];
    this.dataSource.forEach((row) => {
      const bodyLeftRow = [];
      const bodyRightRow = [];
      if (this.selectionType === 'checkbox')
        bodyLeftRow.push(h("div", { class: { 'col': true, 'col-hover': this.hoverRecord === row }, style: { width: CHECKBOX_WIDTH } }, h("p4-checkbox", { class: "checkbox", size: "sm", value: this.selectedRowKeys.includes(row[this.keyField]), onP4Change: () => this.onRowSelectClick(row) })));
      this.columns.forEach((col) => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (col.width)
          colWidth = parseInt(col.width);
        const colEl = h("div", { class: { 'col': true, 'col-hover': this.hoverRecord === row }, style: { width: colWidth + 'px', maxWidth: colWidth + 'px' }, onMouseOver: () => this.onCellMouseOver(row), onClick: () => {
            const selection = window.getSelection();
            if (selection.type != 'Range')
              this.onCellClick(row, col);
          } }, h("div", { class: "col-content" }, row[col.name] ? row[col.name] : ''));
        col.fixed ? bodyLeftRow.push(colEl) : bodyRightRow.push(colEl);
      });
      leftBodyRows.push(h("div", { class: "row" }, bodyLeftRow));
      rightBodyRows.push(h("div", { class: "row" }, bodyRightRow));
    });
    return h("div", { class: "body" }, h("div", { class: "body-container" }, h("div", { class: "left-panel" }, h("div", { class: "table" }, leftBodyRows)), h("div", { class: "right-panel" }, h("div", { class: "table" }, rightBodyRows))));
  }
  render() {
    return h(Host, null, h("div", { class: "grid-component" }, h("div", { class: "list-scroll-wrapper", onScroll: (ev) => this.handleScroll(ev) }, this.renderHeader(), (this.dataSource.length) ? this.renderBody() : renderEmptyData())));
  }
  get el() { return getElement(this); }
};
P4Table.style = p4TableCss;

export { P4Table as p4_table };
