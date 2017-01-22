$(function () {
  // your code will go here
  $.ajax('https://www.codeschool.com/users/Fauziku2.json', {
    dataType: 'jsonp',
    success: function (results) {
      console.log(results.courses.completed)
      addCourses(results.courses.completed)
    }
  })

  function addCourses (courses) {
    var $badges = $('#badges')
    courses.forEach(function (course) {

      // console.log(course)

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges)

      $('<h3 />', {
        text: course.title
      }).appendTo($course)

      $('<img />', {
        src: course.badge
      }).appendTo($course)

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course)
    })
  }
})
