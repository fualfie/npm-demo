Vue.component('fu-chart-low', {
    template:
        '<div :style="progress">{{(0>percent)?error:percent+"%"}}<div style="font-size: small">{{info?"("+info+")":""}}</div></div>'
    ,
    props: {
        value: { type: Number, default: -1 },
        full: { type: Number, default: 100 },
        warn: { type: Number, default: 30 },
        danger: { type: Number, default: 15 },
        error: { type: String, default: 'Error' },
        info: { type: String, default: '' },
    },
    data: function () {
        return {
            progress: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontSize: 'large',
                border: '1px solid black',
                boxShadow: '1px 1px darkgrey',
                borderRadius: '3px',
                boxSizing: 'border-box',
                color: 'grey'
            },
            level: 0,
        }
    },
    watch: {
        level: function () {
            this.progress.color = this.color
            this.progress.background = '-webkit-linear-gradient(left, ' + this.background + ' ' + this.level + '%, white ' + this.level + '%)'
            this.progress = JSON.parse(JSON.stringify(this.progress))
        },
        value: function () {
            if (this.value < 0 || this.value > 100) {
                this.level = 100
            } else {
                this.level = this.percent
            }
        }
    },
    computed: {
        percent: function () {
            return Math.round(parseInt(this.value) / parseInt(this.full) * 100)
        },
        color: function () {
            if (this.percent > this.warn) {
                return 'black'
            } else if (this.percent > this.danger) {
                return 'darkorange'
            } else if (this.percent >= 0) {
                return 'red'
            } else {
                return 'white'
            }
        },
        background: function () {
            if (this.percent > this.warn) {
                return 'greenyellow'
            } else if (this.percent > this.danger) {
                return 'orange'
            } else if (this.percent > 0) {
                return 'red'
            } else {
                return 'gray'
            }
        }
    },
    created: function () {
        this.level = this.percent
    },
})
Vue.component('fu-chart-high', {
    template:
        '<div :style="progress">{{(percent>100 || 0>percent)?error:percent+"%"}}<div style="font-size: small">{{info?"("+info+")":""}}</div></div>'
    ,
    props: {
        value: { type: Number, default: -1 },
        full: { type: Number, default: 100 },
        warn: { type: Number, default: 70 },
        danger: { type: Number, default: 85 },
        error: { type: String, default: 'Error' },
        info: { type: String, default: '' },
    },
    data: function () {
        return {
            progress: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontSize: 'large',
                border: '1px solid black',
                boxShadow: '1px 1px darkgrey',
                borderRadius: '3px',
                boxSizing: 'border-box',
                color: 'grey'
            },
            level: 0,
        }
    },
    watch: {
        level: function () {
            this.progress.color = this.color
            this.progress.background = '-webkit-linear-gradient(left, ' + this.background + ' ' + this.level + '%, white ' + this.level + '%)'
            this.progress = JSON.parse(JSON.stringify(this.progress))
        },
        value: function () {
            if (this.value < 0 || this.value > 100) {
                this.level = 100
            } else {
                this.level = this.percent
            }
        }
    },
    computed: {
        percent: function () {
            return Math.round(parseInt(this.value) / parseInt(this.full) * 100)
        },
        color: function () {
            if (this.percent > this.danger) {
                return 'white'
            } else if (this.percent > this.warn) {
                return 'white'
            } else if (this.percent >= 0) {
                return 'black'
            } else {
                return 'white'
            }
        },
        background: function () {
            if (this.percent > this.danger) {
                return 'red'
            } else if (this.percent > this.warn) {
                return 'orange'
            } else if (this.percent > 0) {
                return 'greenyellow'
            } else {
                return 'gray'
            }
        }
    },
    created: function () {
        this.level = this.percent
    },
})