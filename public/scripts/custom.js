function formatPDF() {
    window.print();
}

function changeNotifications(el) {
    let img = el;
    console.log(el.src)
    let source = el.src.split('images/')[1];
	console.log('source', source);
	
    if (source === 'notice.svg') {
        img.src = 'public/images/noticeOn.svg'
    } else if (source === 'noticeOn.svg') {
        img.src = 'public/images/noticeOff.svg'
    } else {
        img.src = 'public/images/notice.svg'
    }
}
