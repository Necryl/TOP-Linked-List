import mainStyles from "./../styles/main.css";

function Node(value = null, next = null) {
  return {
    value,
    next,
  };
}

function LinkedList() {
  let tail = null;
  let head = tail;
  let size = 0;

  function append(value) {
    let newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  function prepend(value) {
    let head = this.head;
    let newNode = Node(value, head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this.size += 1;
  }

  function at(index) {
    if (!Number.isInteger(index)) {
      throw Error("Given index is not an integer");
    } else if (index < 0) {
      throw Error("Given idnex is smaller than 0");
    }
    let counter = 0;
    let current = this.head;
    while (counter < index && current !== null) {
      counter += 1;
      current = current.next;
    }
    if (current === null) {
      return undefined;
    }
    return current;
  }

  function pop() {
    if (this.size > 0) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.next.next !== null) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.size -= 1;
    }
  }

  function contains(value) {
    if (this.size === 0) {
      return false;
    } else if (this.size === 1) {
      return head.value === value ? true : false;
    }
    let current = this.head;
    let verdict = false;
    do {
      if (current.value === value) {
        verdict = true;
        break;
      }
      current = current.next;
    } while (current !== null);
    return verdict;
  }

  function find(value) {
    if (this.size === 0) {
      return null;
    }
    let current = this.head;
    let verdict = null;
    let counter = 0;
    do {
      if (current.value === value) {
        verdict = counter;
        break;
      }
      current = current.next;
      counter += 1;
    } while (current !== null);
    return verdict;
  }

  function toString() {
    function singular(value) {
      return `( ${value} ) -> `;
    }
    let result = "";
    let current = this.head;
    while (current !== null) {
      result += singular(JSON.stringify(current.value));
      current = current.next;
    }
    result += "null";
    return result;
  }

  let result = {
    head,
    tail,
    size,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
  };
  return result;
}

let list;

[
  () => {
    list = LinkedList();
  },
  () => {
    list.append("Hohoho");
  },
  () => {
    list.prepend("Hahaha");
    list.append("Hehehe");
  },
  () => {
    console.log(list.toString());
  },
].forEach((func) => {
  func();
  console.log(list);
});
