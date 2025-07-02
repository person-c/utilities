// target: 用nbsp替换空格

document.querySelectorAll('code.sourceCode').forEach(code => {
    const spans = Array.from(code.querySelectorAll(':scope > span'));
    spans.forEach(span => {
        const br = document.createElement('br');
        span.after(br);
    });
})

// 获取所有code元素
const codeElements = document.querySelectorAll('code.sourceCode');

// 方案一：直接设置行内样式（适合动态修改）
codeElements.forEach(code => {
    // 基础样式
    code.style.display = '-webkit-box';
    code.style.overflowX = 'auto';
    code.style.whiteSpace = "nowrap";
    code.style.lineHeight = "0%";
    code.style.maxWidth = "100%";
    code.style.padding = "16px";
    code.style.paddingTop = "15px";
    code.style.borderRadius = "5px";
    code.style.borderTopLeftRadius = "0px";
    code.style.borderTopRightRadius = "0px";
    code.style.borderBottomLeftRadius = "0px";
    code.style.borderBottomRightRadius = "0px";
    code.style.fontFamily = "'Operator Mono', Consolas, Monaco, Menlo, monospace";
});

function replaceWhitespaceWithNbsp(parentElement = document.body) {
    const walker = document.createTreeWalker(
        parentElement,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: node =>
                node.textContent.trim() === '' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        }
    );

    const nodesToReplace = [];
    while (walker.nextNode()) nodesToReplace.push(walker.currentNode);

    nodesToReplace.forEach(node => {
        node.textContent = node.textContent.replace(/ /g, '\u00A0');
    });
}

// 调用示例：替换整个页面空白节点
replaceWhitespaceWithNbsp();
