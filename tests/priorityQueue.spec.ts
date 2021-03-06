import PriorityQueue from '../src/ts/queue/priorityQueue'

describe('Queue', () => {
    let queue: PriorityQueue
    beforeEach(() => {
        queue = new PriorityQueue()
    })
    it('starts empty', () => {
        expect(queue.size()).toStrictEqual(0)
        expect(queue.isEmpty()).toStrictEqual(true)
    })
    it('enqueues elements', () => {
        queue.enqueue('a', 1)
        expect(queue.size()).toStrictEqual(1)
        queue.enqueue('b', 2)
        expect(queue.size()).toStrictEqual(2)
        queue.enqueue('c', 3)
        expect(queue.size()).toStrictEqual(3)
        expect(queue.isEmpty()).toStrictEqual(false)
    })
    it('dequeue elements', () => {
        queue.enqueue(1, 1)
        queue.enqueue(2, 2)
        queue.enqueue(3, 3)
        expect(queue.dequeue()).toEqual({'element': 1, 'priority': 1}
        )
        expect(queue.dequeue()).toEqual({'element': 2, 'priority': 2}
        )
        expect(queue.dequeue()).toEqual({'element': 3, 'priority': 3}
        )
        expect(queue.dequeue()).toStrictEqual(undefined)
    })
    it('implements FIFO logic', () => {
        queue.enqueue(1, 1)
        expect(queue.front()).toEqual({'element': 1, 'priority': 1}
        )
        queue.enqueue(2, 2)
        expect(queue.front()).toEqual({'element': 1, 'priority': 1}
        )
        queue.enqueue(3, 3)
        expect(queue.front()).toEqual({'element': 1, 'priority': 1}
        )
        expect(queue.dequeue()).toEqual({'element': 1, 'priority': 1}
        )
        expect(queue.dequeue()).toEqual({'element': 2, 'priority': 2}
        )
        expect(queue.dequeue()).toEqual({'element': 3, 'priority': 3}
        )
        expect(queue.dequeue()).toStrictEqual(undefined)
    })
    it('allows to peek at the front element in the queue without dequeuing it', () => {
        expect(queue.front()).toStrictEqual(undefined)
        queue.enqueue(1, 1)
        expect(queue.front()).toEqual({'element': 1, 'priority': 1}
        )
        queue.enqueue(2, 2)
        expect(queue.front()).toEqual({'element': 1, 'priority': 1}
        )
        queue.dequeue()
        expect(queue.front()).toEqual({'element': 2, 'priority': 2}
        )
    })
    it('returns the correct size', () => {
        expect(queue.size()).toStrictEqual(0)
        queue.enqueue(1, 1)
        expect(queue.size()).toStrictEqual(1)
        queue.enqueue(2, 2)
        expect(queue.size()).toStrictEqual(2)
        queue.enqueue(3, 3)
        expect(queue.size()).toStrictEqual(3)
        queue.clear()
        expect(queue.isEmpty()).toStrictEqual(true)
        queue.enqueue(1, 1)
        queue.enqueue(2, 2)
        queue.enqueue(3, 3)
        expect(queue.size()).toStrictEqual(3)
        queue.dequeue()
        expect(queue.size()).toStrictEqual(2)
        queue.dequeue()
        expect(queue.size()).toStrictEqual(1)
        queue.dequeue()
        expect(queue.size()).toStrictEqual(0)
        queue.dequeue()
        expect(queue.size()).toStrictEqual(0)
    })
    it('returns if it is empty', () => {
        expect(queue.isEmpty()).toStrictEqual(true)
        queue.enqueue(1, 1)
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.enqueue(2, 2)
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.enqueue(3, 3)
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.clear()
        expect(queue.isEmpty()).toStrictEqual(true)
        queue.enqueue(1, 1)
        queue.enqueue(2, 2)
        queue.enqueue(3, 3)
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.dequeue()
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.dequeue()
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.dequeue()
        expect(queue.isEmpty()).toStrictEqual(true)
        queue.dequeue()
        expect(queue.isEmpty()).toStrictEqual(true)
    })
    it('clears the queue', () => {
        queue.clear()
        expect(queue.isEmpty()).toStrictEqual(true)
        queue.enqueue(1, 1)
        queue.enqueue(2, 2)
        expect(queue.isEmpty()).toStrictEqual(false)
        queue.clear()
        expect(queue.isEmpty()).toStrictEqual(true)
    })
})