import Mock from 'mockjs'


Mock.mock('/user', 'get', (options) => {
    const ret = Mock.mock({
        'user': {username:'@cname'}
    })
    return {
        status:200,
        data:ret
    }
})

Mock.mock('/list', 'get', (options) => {

    const ret = Mock.mock({
        'list|20':[{'id|+1':1,img:"@image('78x78','@color')",title:'@ctitle(3,7)',score:'@float(0, 5, 1,1)',price:'@integer(0,10)'}]
    })
    return {
        status:200,
        data:ret
    }
})



