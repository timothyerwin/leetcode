/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = 0;
    this.tail = 0;
    this.size = k;
    this.data = [...Array(this.size)];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
        return false;
    }
    
    if(this.tail < this.size) {
        if(this.data[this.tail] !== undefined) {
            this.tail += 1;
        }
        
        this.data[this.tail] = value;
        
        return true;
    } else if(this.tail === this.size) {
        this.tail = 0;
            
        this.data[this.tail] = value;

        return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        return false;
    }
    
    if(this.head === this.size) {
        this.head = this.tail;
        
        delete this.data[this.head];
        
        this.head = this.tail = 0;
        
        return true;
    }
    
    if(this.head === this.tail) {
        delete this.data[this.head];

        this.head = this.tail = 0;
        
        return true;
    }
    

    delete this.data[this.head];

    this.head += 1;
    
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
        return -1;
    }
    
    return this.data[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
        return -1;
    }
    
    return this.data[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.data.filter(v => v !== undefined).length === 0;  
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.data.filter(v => v !== undefined).length === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
