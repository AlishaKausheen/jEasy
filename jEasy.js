class ElementCollection extends Array{
    ready(cb) {
        const isReady = this.some(e => {
            return e.readyState! = null && e.readyState! = "loading";
        })
        if (isReady) {
            cb()
        }
        else {
            this.on("DOMContentLoaded",cb)
        }
        return this
    }
}