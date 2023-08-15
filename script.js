// 01
    let newCount = 0;
    document.getElementById('plus-btn').addEventListener('click', function () {
        const element = document.getElementById('count')
        newCount += 1;
        element.innerText = newCount;

        if (newCount > 32) {
            alert('সুবহানাল্লাহ ৩৩ বার হয়েছে, এখন আলহামদুলিল্লাহ পড়ুন');
        }

    })
    document.getElementById('minus-btn').addEventListener('click', function () {
        const element = document.getElementById('count')
        newCount -= 1;
        element.innerText = newCount;
    })

    //  02
    let newCount2 = 0;
    document.getElementById('plus-btn02').addEventListener('click', function () {
        const element = document.getElementById('count-2')
        newCount2 += 1;
        element.innerText = newCount2;

        if (newCount2 > 32) {
            alert('আলহামদুলিল্লাহ ৩৩ বার হয়েছে, এখন আল্লাহু আকবার পড়ুন');
        }

    })
    document.getElementById('minus-btn02').addEventListener('click', function () {
        const element = document.getElementById('count-2')
        newCount2 -= 1;
        element.innerText = newCount2;
    })

    //  03
    let newCount3 = 0;
    document.getElementById('plus-btn03').addEventListener('click', function () {
        const element = document.getElementById('count-3')
        newCount3 += 1;
        element.innerText = newCount3;

        if (newCount3 > 33) {
            alert('আপনার তাসবিহ পড়া সম্পন্ন হয়েছে, আবার পড়তে আবার পড়ুন বাটন এ ক্লিক করুন');
        }

    })
    document.getElementById('minus-btn03').addEventListener('click', function () {
        const element = document.getElementById('count-3')
        newCount3 -= 1;
        element.innerText = newCount3;
    })

    // clear button
    // 01
    document.getElementById('clear').addEventListener('click', function () {
        const element = document.getElementById('count');
        newCount = 0;
        element.innerText = newCount;
    });

    // 02
    document.getElementById('clear').addEventListener('click', function () {
        const element = document.getElementById('count-2');
        newCount2 = 0;
        element.innerText = newCount2;
    });

    // 03
    document.getElementById('clear').addEventListener('click', function () {
        const element = document.getElementById('count-3');
        newCount3 = 0;
        element.innerText = newCount3;
    });