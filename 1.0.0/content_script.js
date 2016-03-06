walk(document.body);
setTimeout(function () {
    walk(document.body);
}, 1000);

function walk(node) {
    // Source: http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bTrump\b/g, "Trump's Little Willy");
    v = v.replace(/\bTRUMP\b/g, "TRUMP'S LITTLE WILLY");
    v = v.replace(/\bTRUMPS\b/g, "TRUMP'S LITTLE WILLY");
    v = v.replace(/\bTrumps\b/g, "Trump's little willy");
    v = v.replace(/\bdonaldjtrump\b/g, "donaldjtrumpslittlewilly");
    v = v.replace(/\bdonaldtrump\b/g, "donaldtrmpslittlewilly");
    v = v.replace(/\brealdonaldtrump\b/g, "realdonaldtrumpslittlewilly");
    v = v.replace(/\brealDonaldTrump\b/g, "realDonaldTrumpsLittleWilly");
    v = v.replace(/\bDrumpf\b/g, "Drumpf's Little Willy");
    v = v.replace(/\bDRUMPF\b/g, "DRUMPF'S LITTLE WILLY");
    v = v.replace(/\bDRUMPFS\b/g, "DRUMPF'S LITTLE WILLY");
    v = v.replace(/\bDrumpfs\b/g, "Drumpf's little willy");
    v = v.replace(/\bdonaldjdrumpf\b/g, "donaldjdrumpfslittlewilly");
    v = v.replace(/\bdonalddrumpf\b/g, "donalddrumpfslittlewilly");
    v = v.replace(/\brealdonalddrumpf\b/g, "realdonalddrumpfslittlewilly");
    v = v.replace(/\brealDonaldDrumpf\b/g, "realDonaldDrumpfslittlewilly");
    v = v.replace(/\bMake America Great Again\b/g, "Make Donald Trump's Little Willy Great Again!");
    v = v.replace(/\bMake America Great Again!\b/g, "Make Donald Trump's Little Willy Great Again!");

    textNode.nodeValue = v;
}
