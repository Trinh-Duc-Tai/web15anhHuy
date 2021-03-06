// axios.get('http://localhost:1124/randomquestion')
//     .then(function (response) {
//         if (response.data) {
//             document.getElementById("questionContent").innerText = response.data.questionContent;

//         }
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
function getRandomQuestion() {
	$.ajax({
		url: 'http://localhost:1124/randomquestion',
		type: "GET",
		success: function (response) {
			if (response) {
				$("#questionContent").text(response.questionContent);
				$(".answer_btn").data("questionid", response.id);
			}
		},
		error: function (err) {
			console.log(err);
		}
	})
}

getRandomQuestion();
$("#otherQuestion").on("click", function () {
	getRandomQuestion();
});

$(".answer_btn").on("click", function () {
	console.log($(this).data())
	$.ajax({
		url: "http://localhost:1124/answer",
		type: "POST",
		data: $(this).data(),
		success: function (response) {
			if (response.success) {
				window.location.href = "/vote";
			}
		},
		error: function (err) {
			console.log(err);
			// window.location.href = "https://google.com/search?q=site:stackoverflow.com why my code didn't run";
		}
	})
});

$('#voteResult').on("click", function () {
	$.ajax({
		url: 'http://localhost:1124/vote',
		type: 'GET',
		success: function (response) {
			if (response) {
				window.location.href = "/vote";
			}
		},
		error: function (err) {
			console.log(err);
		}
	})
});