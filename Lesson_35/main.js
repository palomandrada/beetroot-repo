// const secondHand = document.getElementById ("seconds-hand")
// const minutesHand = document.getElementById ("minutes-hand")
// const hoursHand = document.getElementById ("hours-hand")

// function getTime() {
//     const now = new Date()
//     const seconds = now.getSeconds()
//     const minutes = now.getMinutes()
//     const hours = now.getHours()
//     const timeInterval = 6 //the hand should move 6 degress every second (works for hours and minutes)

//     secondHand.style.transform = "rotate(" + (seconds * timeInterval ) + "deg)" 
//     minutesHand.style.transform = "rotate(" + (minutes * timeInterval ) + "deg)" 
//     hoursHand.style.transform = "rotate(" + (hours * 30 ) + "deg)"

// }

// getTime()
// setInterval(getTime, 100)

//---

class WorldClock {
    constructor(container, timezone, secondsHand, minutesHand, hoursHand, center) {
        this.container = container
        this.timezone = timezone
        this.secondHand = secondsHand
        this.minutesHand = minutesHand
        this.hoursHand = hoursHand
        this.center = center
        this.clockElement = document.createElement('div')
        this.clockElement.className = 'clock'
        this.container.appendChild(this.clockElement)
        this.render();
    }

    getCurrentDate() {
        const date = new Date().toLocaleDateString('en-US', {
            timeZone: this.timezone
        })
        return `Current Date: ${date}`
    }

    getCurrentDateTime() {
        const dateTime = new Date().toLocaleString('en-US', {
            timeZone: this.timezone
        })
        return `Current Date and Time: ${dateTime}`
    }

    deleteClock() {
        this.container.removeChild(this.clockElement);
    }

    render() {
        this.clockElement.innerHTML = `
            <p>Timezone: ${this.timezone}</p>
            <button class="show-time">Show Time</button>
            <button class="show-datetime">Show Date & Time</button>
            <button class="delete-clock">Delete Clock</button>
            <div class="output"></div>
        `;

        this.clockElement.querySelector('.show-time').addEventListener('click', () => {
            this.clockElement.querySelector('.output').textContent = this.getCurrentDate();
        });

        this.clockElement.querySelector('.show-datetime').addEventListener('click', () => {
            this.clockElement.querySelector('.output').textContent = this.getCurrentDateTime();
        });

        this.clockElement.querySelector('.delete-clock').addEventListener('click', () => {
            this.deleteClock();
        });
    }
}