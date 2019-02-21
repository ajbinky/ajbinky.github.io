const list = "ruleslist";
var rules = ["Rule one", "Rule two", "etc", "Double click a rule to delete it"];

function appendRule(rule) {
    var ul = document.getElementById(list);
    var li = document.createElement("li");
    li.innerText = rule;
    li.setAttribute("ondblclick", "deleteRule(this)");
    ul.appendChild(li);
}

function deleteRule(rule) {
    if (rules.length === 1) {
        rules = [];
    } else {
        var index = rules.indexOf(rule.innerText);
        if (index !== -1) {
            rules.splice(index, 1);
        }
    }
    rule.parentNode.removeChild(rule);
}

function newRule() {
    var rule = prompt("Please enter new rule", "Put one damage counter on each pokemon in play");
    if (rule) {
        rules.push(rule);
        appendRule(rule);
    }
}

function toggleRulesList() {
    var ul = document.getElementById(list);
    if (ul.style.display === "none") {
        ul.style.display = "block";
    } else {
        ul.style.display = "none";
    }
}

function saveFile() {
    alert("Not yet implemented");
}

function randomRule() {
    var rule = document.getElementById("rule");
    var ul = document.getElementById(list);
    var randy = rules[Math.floor(Math.random()*rules.length)];
    rule.innerText = randy;
}