//1.1
class Video {
    constructor(title, uploader, time) {
      this.title = title
      this.uploader = uploader
      this.time = time
    }
  //1.2
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
  }
  //1.3
  const video1 = new Video("Title 1", "Uploader 1", 120)
  video1.watch()
  //1.4
  const video2 = new Video("Title 2", "Uploader 2", 180)
  video2.watch()