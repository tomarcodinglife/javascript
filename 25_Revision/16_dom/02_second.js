let parent = document.querySelector('.parents');
let child = parent.children;
let childLength = child.length;
let child1 = parent.children[0];
let child2 = child[1];
let child3 = child[2];
let child4 = child[3];
let child5 = child[4];
let child6 = child[5];
let child7 = child[6];

child1.style.color = 'red';
content = "Hello World!";

for (let i = 0; i < childLength; i++) {
    child[i].innerHTML = `${content}` + (i + 1);
}