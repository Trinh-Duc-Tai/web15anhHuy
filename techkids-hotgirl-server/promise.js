const promiseExp = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Trả tiền");
        }, 5000);
        setTimeout(function(){
            reject("Đ trả đấy!!!");
        },6000);
    });
}

// promiseExp()
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log("Error: ", err);
//     })

const muaRau = (money) => new Promise((resolve, reject)=>{
    if(money >10000){
        resolve("Rau cua chau day!");
    }else reject("D ban!!");
});

const anRau = () => new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("An xong roi!!");
    },1000);
});


const asyncFunction = async () => {
    try {
        console.log("Bat dau mua rau!");
        await muaRau(10000);
        console.log("Da co rau!");
        await anRau();
        console.log("Xong");
    } catch (error) {
        console.log("Error!", error);
    }
    
}
asyncFunction();