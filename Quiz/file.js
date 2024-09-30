var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
        ["1. If x = 5, what is a correct syntax for printing the data type of the variable x?", "A) print(dtype(x))",  "B) print(type(x))", "C) print(x.dtype())", "B"],
	["2. Which is NOT a legal numeric data type in Python:", "A) int", "B) long", "C) float", "B"],
        ["3. What will be the result of the following code: x = 'Welcome'             print(x[3])", "A) Wel", "B) c ", "C) Welcome Welcome Welcom", "B"],
	["4. What will be the result of the following syntax:
         x = 5
         x += 6
        print(x)", "A)5", "B) 6",  "C) 11" , "C"],
       ["5. What will be the result of the following syntax:
        mylist = ['apple', 'banana', 'cherry']
        print(mylist[-1]) ", "A) apple", 			"B) banana", 	"C) cherry", "C"],
       ["6. Whis one of these is a tuple?", "A) thistuple = ('apple', 'banana', 'cherry')", "B) thistuple = ['apple', 'banana', 'cherry']", "C) thistuple = {'apple', 'banana', 'cherry'}", "A"],
       ["7) Which one of these is a set?", "A) myset = ('apple', 'banana', 'cherry')", "B) myset = ['apple', 'banana', 'cherry']"," C) myset = {'apple', 'banana', 'cherry'}", "C"],


	
        [ "What is 10 + 4?", "12", "14", "16", "B" ],
	[ "What is 20 - 9?", "7", "13", "11", "C" ],
	[ "What is 7 x 3?", "21", "24", "25", "A" ],
	[ "What is 8 / 2?", "10", "2", "4", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
