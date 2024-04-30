function formatDuration (seconds) {
    let answer = [] //years, days, hours, minutes, and seconds
    answer.unshift(seconds % 60)
    seconds -= answer[0]
    answer.unshift(seconds % 3600)
    seconds -= answer[0]
    answer[0] = answer[0] / 60
    answer.unshift(seconds % 86400)
    seconds -= answer[0]
    answer[0] = answer[0] / 3600
    answer.unshift(seconds % 31536000)
    seconds -= answer[0]
    answer[0] = answer[0] / 86400
    answer.unshift(seconds / 31536000)
  
    answer[0] = answer[0] == 0 ? '-' : (answer[0] == 1 ? answer[0].toString() + ' year' : answer[0].toString() + ' years')
    answer[1] = answer[1] == 0 ? '-' : (answer[1] == 1 ? answer[1].toString() + ' day' : answer[1].toString() + ' days')
    answer[2] = answer[2] == 0 ? '-' : (answer[2] == 1 ? answer[2].toString() + ' hour' : answer[2].toString() + ' hours')
    answer[3] = answer[3] == 0 ? '-' : (answer[3] == 1 ? answer[3].toString() + ' minute' : answer[3].toString() + ' minutes')
    answer[4] = answer[4] == 0 ? '-' : (answer[4] == 1 ? answer[4].toString() + ' second' : answer[4].toString() + ' seconds')
    
    answer = answer.join(', ').replaceAll('-, ', '').replaceAll(', -', '').split(' ')
    
    if (answer.length > 2)
      {
        answer[answer.length - 3] = answer[answer.length - 3].slice(0, answer[answer.length - 3].length - 1)
        answer.splice(answer.length - 2, 0, 'and')
      }
    
    return answer.length == 1 ? 'now' : answer.join(' ')
  }
  