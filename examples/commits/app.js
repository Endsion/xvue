var demo = new xVue({

    el: '#demo',

    data: {
        branch: 'master',
        commits: [{
            sha: '2111111111111111111',
            commit:{
            message: 'you are a good man',
            author: {
                data: '2012',
                name: '123'
            }
        }
        }]
    },

    created: function () {
        this.$watch('branch', function () {
            this.fetchData()
        })
    },

    filters: {
        truncate: function (v) {
            var newline = v.indexOf('\n')
            return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ')
        }
    },

    methods: {
        fetchData: function () {
            // var xhr = new XMLHttpRequest(),
            //     self = this
            // xhr.open('GET', 'https://api.github.com/repos/yyx990803/vue/commits?per_page=3&sha=' + self.branch)
            // xhr.onload = function () {
            //     self.commits = JSON.parse(xhr.responseText)
            // }
            // xhr.send()
        }
    }
})