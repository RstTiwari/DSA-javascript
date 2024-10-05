var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

var Node = function (val) {
    this.val = val;
    this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.length === 0 || index < 0 || index >= this.length) return null;
    let val = this.head.val;
    let cur = this.head;

    for (let i = 0; i <= index; i++) {
        console.log(val, cur, "===");

        val = cur.val;
        cur = cur.next;
    }
    return val;
};

/**
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function (val) {
    // adding at the head or the shift method
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        let curHead = this.head;
        this.head = newNode;
        this.head.next = curHead;
    }
    this.length++;
    return newNode.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return newNode.val;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let newNode = new Node(val);
    if (index > this.length) return null;
    let cur = this.head;
    for (let i = 0; i < index; i++) {
        console.log(cur, `${i} ittration`);
        cur = cur.next;
        console.log(cur, `${i} ittration`);
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {};

// Your MyLinkedList object will be instantiated and called as such:
let val = 12;
var obj = new MyLinkedList();
obj.addAtHead(100);
obj.addAtHead(10);
obj.addAtTail(50);
obj.addAtTail(30);
// var param_1 = obj.get(4);
let param_2 = obj.addAtIndex(2, 10);

console.log(param_2, "=====");

// obj.addAtIndex(index, val);
// obj.deleteAtIndex(index);
