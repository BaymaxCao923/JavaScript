*JavaScript的书写规范可以参照C语言的书写规范

应该写在哪里：
	JavaScript可以写在HTML的<head><script type="text/javascript"></script></head>标签内
	也可以写在外部js文件，用<script src="main.js"></script>标签来引入

JS在页面中的位置：
	javascript作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的
	script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body
	设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的

每一句语句后边都要有一个分号

注释的使用：
	可以用双斜线和/**/的方法来添加注释

定义变量：var 变量名;
	变量名可以任意取名，但要遵循命名规则:
	1.变量必须使用字母、下划线(_)或者美元符($)开始。
	2.然后可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成。
	3.不能使用JavaScript关键词与JavaScript保留字。
	关键字：
		break; else; new; var; case; finally; return; void; catch;
		for; switch; while; default; if; throw; delete; in; try;
		do; instanceof; typeof;
	保留字：
		abstract; enum; int; short; boolean; export; interface;
		static; byte; extends; long; super; char; final; native;
		synchronized; class; float; package; throws; const; goto;
		private; transient; debugger; implements; protected;
		volatile; double; import; public;

变量声明：var 变量名;
	同时声明多个变量，中间用逗号隔开：var num1, num2;

变量赋值：var num=3;
	你可以把任何东西存储在变量里，如数值、字符串(需要用双引号括起来)、布尔值等，例如：
	var num1=3;
	var num2="一百二十三";
	var num3=true;

表达式：
	一个表达式可以包含常数或变量
	串表达式：
		var mychar="JavaScript";
		document.write("I"+"Love"+"You"+"super"+mychar);//输出ILoveYouSuperJavaScript
	数值表达式：
		var num=5*3;
		document.write(num);//输出15
	布尔表达式：
		var res=2>3;
		document.write(res);//输出false

+号操作符：
	JavaScript中还有很多这样的操作符，例如，算术操作符(+、-、*、/等)，比较操作符(<、>、>=、<=等)，逻辑操作符(&&、||、！)
	算术运算符主要用来完成类似加减乘除的工作，在JavaScript中，“+”不只代表加法，还可以连接两个字符串：
	var myString="Java"+"Script";//myString的值为JavaScript
	var myNum=5+3;//myNum的值为8

++ --运算符：（自增 自减运算符）
	自增：“++”
	自减：“--”
	var num1=5, num2=7;
	num1++;//num1=num1+1;	6
	num2--;//num2=num2-1;	6

比较操作符：
	var a = 5;//定义a变量，赋值为5
	var b = 9; //定义b变量，赋值为9
	document.write (a<b); //a小于b的值吗? 结果是真(true)
	document.write (a>=b); //a大于或等于b的值吗? 结果是假(false)
	document.write (a!=b); //a不等于b的值吗? 结果是真(true)
	document.write (a==b); //a等于b的值吗? 结果是假(false)

与操作符：&&
	"&&"是逻辑与操作符，只有“&&”两边值同时满足(同时为真)，整个表达式值才为真。
或操作符：||
	"||"是逻辑或操作符，相当于生活中的“或者”，当两个条件中有任一个条件满足，“逻辑或”的运算结果就为“真”
非操作符：!
	"!"是逻辑非操作符，也就是"不是"的意思,非真即假，非假即真。

操作符优先级：
	操作符之间的优先级（高到低）:
	算术操作符 → 比较操作符 → 逻辑操作符 → "="赋值符号
	如果同级的运算是按从左到右次序进行,多层括号由里向外

数组：var myArr=new Array();
	一个数组变量可以存放多个数据
	var myArr=new Array();
	myArr[0]=80;
	myArr[1]=60;
	myArr[2]=99;
	document.write("第一个人的成绩是:"+myarr[0]);
	document.write("第二个人的成绩是:"+myarr[1]);
	document.write("第三个人的成绩是:"+myarr[2]);

数组的创建：var myArray=new Array(8);//括号内数字规定了数组的长度
	注意：
	1.创建的新数组是空数组，没有值，如输出，则显示undefined。
	2.虽然创建数组时，指定了长度，但实际上数组都是变长的，也就是说即使指定了长度为8，仍然可以将元素存储在规定长度以外

数组赋值：myArray[0]=88;
	数组存储的数据可以是任何类型（数字、字符、布尔值等
	第一种：
		var myArray=new Array();//创建一个新的空数组
		myArray[0]=1;//存储第1个数组元素的值
		myArray[1]=2;//存储第2个数组元素的值
		myArray[2]=3;//存储第3个数组元素的值
		myArray[3]=4;//存储第4个数组元素的值
	第二种：
		var myArray=new Array(1,2,3,4);//创建数组同时赋值
	第三种：
		var myArray=[1,2,3,4];//直接输入一个数组（称 “字面量数组”

向数组新增元素：
	只需使用下一个未用的索引，任何时刻可以不断向数组增加新元素
	myArray[4]=5;//存储第5个数组元素的值

使用数组元素：
	要得到一个数组元素的值，只需引用数组变量并提供一个索引
	第二个数组元素的值为：myArray[1]

数组属性length：myArray.length;//获得数据myArray的长度
	如果我们想知道数组的大小，只需引用数组的一个属性length
	注意：因为数组的索引总是由0开始，所以一个数组的上下限分别是：0和length-1
		var arr=[55,32,5,90,60,98,76,54];//包含8个数值的数组arr
		document.write(arr.length); //显示数组长度8
		document.write(arr[7]); //显示第8个元素的值54
	JavaScript数组的length属性是可变的，这一点需要特别注意
		arr.length=10; //增大数组的长度
		document.write(arr.length); //数组长度已经变为10
	数组随元素的增加，长度也会改变
		var arr=[98,76,54,56,76]; // 包含5个数值的数组
		document.write(arr.length); //显示数组的长度5
		arr[15]=34;  //增加元素，使用索引为15,赋值为34
		alert(arr.length); //显示数组的长度16

二维数组：
	二维数组的表示: myarray[ ][ ]
	注意: 二维数组的两个维度的索引值也是从0开始，两个维度的最后一个索引值为长度-1
	定义方法一：
		var myarr=new Array();  //先声明一维
		for(var i=0;i<2;i++){   //一维长度为2
		   myarr[i]=new Array();  //再声明二维
		   for(var j=0;j<3;j++){   //二维长度为3
		   myarr[i][j]=i+j;   // 赋值，每个数组元素的值为i+j
		   }
		 }
	定义方法二：
		var myarr = [[0,1,2],[1,2,3]]//
	赋值：
		myarr[0][1]=5;//将5的值传入到数组中，覆盖原有值

if判断语句：if(){}
	if语句是基于条件成立才执行相应代码时使用的语句
	var mypen = "black"; //定义变量mypen，存储笔的黑色。
	 if(mypen == "black")
	{
		document.write("笔是黑色的，所以购买");
	}

if else判断语句：if(){}else{}
	if(条件){
		条件成立的执行代码
	}else{
		条件不成立的执行代码
	}

if else if判断语句（多重判断）：
	if (条件1) {
		条件1成立执行的代码
	}else if(条件2){
		条件2成立执行的代码
	}
	...
	else if(条件n){
		条件n成立执行的代码
	}else{
		条件1,2,...,n都不成立执行的代码
	}

switch case语句：
	Switch必须赋初始值，值与每个case值匹配。满足执行该 case 后的所有语句，并用break语句来阻止运行下一个case。如所有case值都不匹配，执行default后的语句。
	switch(表达式){
		case label_1:
			statements_1
			break;
		case label_2:
			statements_2
			break;
		case label_3:
		case label_4:
			statements_3
			break;
		default:
			statements_def
			break;
	}//切记不要忘记break！！！

for循环：
	for (var i = 0; i < 10.length; i++)
		{

		};

while循环：while循环重复执行一段代码，直到某个条件不再满足
	var num=0;  //初始化值
	while (num<=6)   //条件判断
	{
	  document.write("取出第"+num+"个球<br />");
	  num=num+1;  //条件值更新
	}

do while循环：和while的基本原理是相同的，但它保证循环体至少被执行一次
	var mynum =6;//mynum初值化数值为6
	do
	{
	document.write("数字:"+mynum+"<br/>");
	mynum=mynum-1;
	}
	while(mynum>0)

break跳出循环：在while、for、do...while、while循环中使用break语句退出当前循环，直接执行后面的代码。
	var mynum =new Array(70,80,66,90,50,100,89);//定义数组mynum并赋值
	var i=0;
	while(i<mynum.length)
	{
	  if(mynum[i]<60)
	   {
	    document.write("成绩"+mynum[i]+"不及格，不用循环了"+"<br>");
	    break;
	   }
	  document.write("成绩:"+mynum[i]+"及格，继续循环"+"<br>");
	  i=i+1;
	}

continue跳过本次循环：continue的作用是仅仅跳过本次循环，而整个循环体继续执行
	 var mynum =new Array(70,80,66,90,50,100,89);//定义数组mynum并赋值
	 var i;
	 for(i=0;i<mynum.length;i++)
	 {
	  	if(mynum[i]<60)
	    {
		document.write("成绩不及格，不输出！"+"<br>");
	    continue;
		}
		document.write("成绩:"+mynum[i]+"及格，输出!"+"<br>");
	}

函数：可以写一次代码，然后反复地重用这个代码
	function add (a,b) {
		sum=a+b;
		document.write(sum);
	}//函数定义只需写一次就可以
	add(5,3);
	add(3,2);//只需调用函数就可以

函数的定义：
	function 函数名 (函数携带的参数) {
		函数体
	}

函数的调用：
	第一种：在script标签内调用，直接写函数名
		<script type="text/javascript">
		    function add2()
		    {
		         sum = 1 + 1;
		         alert(sum);
		    }
		  add2();//调用函数，直接写函数名。
		</script>
	第二种：在HTML文件中调用，如通过点击按钮后调用定义好的函数。
		<script type="text/javascript">
		   function add2()
		   {
		         sum = 5 + 6;
		         alert(sum);
		   }
		</script>
		<input type="button" value="click it" onclick="add2()">  //按钮,在onclick点击事件中直接写函数名即可完成调用

有参数的函数：fun 函数名(参数1, 参数2){函数体}
	注意:参数可以多个，根据需要增减参数个数。参数之间用(逗号","）隔开, 例如:
		function add2(x,y)
		{
		   sum = x + y;
		   document.write(sum);
		}
		add2(3,4);//输出7
		add2(4,9);//输出13

返回值的函数:
		function add2(x,y)
		{
		   sum = x + y;
		   return sum; //返回函数值,return后面的值叫做返回值。
		}//只需要把document.write(sum); 改为 return sum;
	还可以通过变量存储调用函数的返回值，代码如下:
		result = add2(3,4);//语句执行后,result变量中的值为7。
	注意:函数中参数和返回值不只是数字，还可以是字符串等其它类型。

事件：
	JavaScript创建动态页面。事件是可以被JavaScript侦测到的行为。
	onclick：鼠标单击事件
	onmouseover：鼠标经过事件
	onmouseout：鼠标移开事件
	onchange：文本框内容改变事件
	onselect：文本框内容被选中事件
	onfocus：光标聚焦
	onblur：光标离开
	onload：网页导入
	onunload：关闭网页

onclick事件：鼠标点击
	鼠标单击事件，当在网页上单击鼠标时，就会发生该事件。同时onclick事件调用的程序块就会被执行，通常与按钮一起使用。
	<script type="text/javascript">
	      function add2(){
	        var numa,numb,sum;
	        numa=6;
	        numb=8;
	        sum=numa+numb;
	        document.write("两数和为:"+sum);  }
	   </script>
	<body>
	   <form>
	      <input name="button" type="button" value="点击提交" onclick="add2()" />
	   </form>
	</body>//鼠标点击按钮时，触发add2()函数，输出：两数和为:14

onmouseover事件：鼠标经过
	当鼠标移到一个对象上时，该对象就触发onmouseover事件，并执行onmouseover事件调用的程序。
	<script type="text/javascript">
	    function message(){
	      confirm("请输入密码后，再单击确定!"); }
	</script>
	<body>
	<form>
	密码:<input name="password" type="password" >
	<input name="确定" type="button" value="确定" onmouseover="message()"/>
	</form>
	</body>//鼠标经过确定按钮时，弹出对话框

onmouseout事件：鼠标移开
	当鼠标移开当前对象时，执行onmouseout调用的程序。
	<script type="text/javascript">
	  function message(){
	    alert("不要移开，点击后进行慕课网!"); }
	</script>
	<body>
	<form>
	  <a href="http://www.imooc.com" onmouseout="message()">点击我</a>
	</form>
	</body>//鼠标移开“点击我”时，弹出对话框。

onfocus事件：光标聚焦
	  <script type="text/javascript">
	    function message(){
		  alert("请选择，您现在的职业！");
		}
	  </script>
	<body>
	请选择您的职业：<br>
	  <form>
	    <select name="career" onfocus="message()">
	      <option>学生</option>
	      <option>教师</option>
	      <option>工程师</option>
	      <option>演员</option>
	      <option>会计</option>
	    </select>
	  </form>
	</body>//鼠标单击下拉选择框时，弹出对话框

onblur事件：失去焦点
	onblur事件与onfocus是相对事件，当光标离开当前获得聚焦对象的时候，触发onblur事件，同时执行被调用的程序。
	<script type="text/javascript">
	  function message(){
	    alert("请确定已输入密码后，在移开!"); }
	</script>
	<body>
	  <form>
	   用户:<input name="username" type="text" value="请输入用户名！" >
	   密码:<input name="password" type="text" value="请输入密码！" onblur="message()">
	  </form>
	</body>//当光标焦点不在密码框时，弹出对话框

onselect事件：内容选中
	当文本框或者文本域中的文字被选中时，触发onselect事件，同时调用的程序就会被执行。
	<script type="text/javascript">
	  function message(){
	    alert("您触发了选中事件！"); }
	</script>
	<body>
	  <form>
	  个人简介：<br>
	   <textarea name="summary" cols="60" rows="5" onselect="message()">请写入个人简介，不少于200字！</textarea>
	  </form>
	</body>//当选中文本框的文字时，弹出对话框

onchange事件：文本框内容改变
	通过改变文本框的内容来触发onchange事件，同时执行被调用的程序。
	<script type="text/javascript">
	  function message(){
	    alert("您改变了文本内容！"); }
	</script>
	<body>
	  <form>
	  个人简介：<br>
	   <textarea name="summary" cols="60" rows="5" onchange="message()">请写入个人简介，不少于200字！</textarea>
	  </form>
	</body>//当文本框内容改变，失去光标焦点时，弹出对话框

onload事件：加载页面事件
	事件会在页面加载完成后，立即发生，同时执行被调用的程序。
	注意：1. 加载页面时，触发onload事件，事件写在<body>标签内。
	     2. 此节的加载页面，可理解为打开一个新页面时。
	如下代码,当加载一个新页面时，弹出对话框“加载中，请稍等…”。
	<script type="text/javascript">
	  function message(){
	    alert("加载中，请稍等…"); }
	</script>
	<body onload="message()">
	  欢迎学习JavaScript。
	</body>

onunload事件：退出页面事件
	当用户退出页面时（页面关闭、页面刷新等），触发onUnload事件，同时执行被调用的程序。//页面关闭时无法调用，刷新可以调用
	注意：不同浏览器对onunload事件支持不同。
	<script type="text/javascript">
	     window.onunload = onunload_message;
	     function onunload_message(){
	        alert("您确定离开该网页吗？");
	    }
	</script>
	<body>
	  欢迎学习JavaScript。
	</body>

对象：
	JavaScript 中的所有事物都是对象，如:字符串、数值、数组、函数等，每个对象带有属性和方法。
	对象的属性：
		反映该对象某些特定的性质的，如：字符串的长度、图像的长宽等；
	对象的方法：
		能够在对象上执行的动作。例如，表单的“提交”(Submit)，时间的“获取”(getYear)等；
	JavaScript 提供多个内建对象，比如 String、Date、Array 等等，使用对象前先定义

	访问对象属性的语法:
	对象名.属性名

	访问对象的方法：
	对象名.方法名()

	<script type="text/javascript">
	  var myarray=new Array(5);
	  var mynum=myarray.length;
	  document.write("数组长度:"+mynum);
	</script>//输出：“数组长度:5”

日期对象Date：
	日期对象可以储存任意一个日期，并且可以精确到毫秒数
	var obj=new Date();
	使 obj 成为日期对象，并且已有初始值：当前时间(当前电脑系统时间)
	如果要自定义初始值：
		var d = new Date(2012, 10, 1);  //2012年10月1日
		var d = new Date('Oct 1, 2012'); //2012年10月1日
	访问方法语法：“<日期对象>.<方法>”
		get/setDate();返回 设置日期
		get/SetFullYear();返回 设置年份，用四位数
		get/setYear(); 返回 设置年份
		get/setMonth(); 返回 设置月份
		get/setHours(); 返回 设置小时，24小时制
		get/setMinutes(); 返回 设置分钟数
		get/setSeconds(); 返回 设置秒钟数
		get/setTime(); 返回 设置时间（单位毫秒）
		getDay();返回 星期，数字是0~6，0表示星期日

返回 设置年份方法：get/setFullYear();
	<script type="text/javascript">
	var mydate=new Date();
	var myyear=mydate.getFullYear();
	document.write("年份:"+myyear);
	</script>//输出当前年份，2015

返回星期的方法：getDay();
	getDay() 返回星期，返回的是0-6的数字，0 表示星期天。
	<script type="text/javascript">
	  var mydate=new Date();//定义日期对象
	  var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; //定义数组对象,给每个数组项赋值
	  var mynum=mydate.getDay();//返回值存储在变量mynum中
	  document.write(mydate.getDay());//输出getDay()获取值
	  document.write("今天是："+ weekday[mynum]);//输出星期几
	</script>

返回 设置时间方法：get/setTime();
	get/setTime() 返回/设置时间，单位毫秒数，计算从1970年1月1日零时到日期对象所指的日期的毫秒数。
	如果将目前日期对象的时间推迟1小时，代码如下:
	<script type="text/javascript">
	  var mydate=new Date();
	  document.write("当前时间："+mydate+"<br>");
	  mydate.setTime(mydate.getTime() + 60 * 60 * 1000);//此句代码改变了mydate的值
	  document.write("推迟一小时时间：" + mydate);
	</script>

String字符串对象：var str="I love JavaScript.";
	访问字符串对象的属性length:
	stringObject.length; 返回该字符串的长度。
		var len=str.length;
	访问字符串对象的方法：
	使用 String 对象的 toUpperCase() 方法来将字符串小写字母转换为大写
		var upp=str.toUpperCase();
	使用 String 对象的 toLowerCase() 方法来将字符串大写字母转换为小写
		var low=str.toLowerCase();

返回指定位置的字符：str.charAt(index)
	charAt() 方法可返回指定位置的字符。返回的字符是长度为 1 的字符串
	参数index：必需，表示字符串中某个位置的数字，即字符在字符串中的下标
	注意：
	1.字符串中第一个字符的下标是 0。最后一个字符的下标为字符串长度减一(string.length-1)
	2.如果参数 index 不在 0 与 string.length-1 之间，该方法将返回一个空字符串
	返回最后一个字符：
	<script type="text/javascript">
	  var mystr="I love JavaScript!"
	  document.write(mystr.charAt(mystr.length-1));//输出结果：!
	</script>

返回指定的字符串首次出现的位置：mystr.indexOf(substring, startpos)
	indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
	参数说明：
		substring:必需，规定需要检索的字符串值
		startpos:可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是0到stringObject.length-1。如省略该参数，则将从字符串的首字符开始检索。
	说明：
	1.该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 substring。
	2.可选参数，从stringObject的startpos位置开始查找substring，如果没有此参数将从stringObject的开始位置查找。
	3.如果找到一个 substring，则返回 substring 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。
	注意：
	1.indexOf() 方法区分大小写。
	2.如果要检索的字符串值没有出现，则该方法返回 -1

	检索第二个字符"o"出现的位置：
	<script type="text/javascript">
	  var mystr="Hello World!"
	  document.write(mystr.indexOf("o", 5));
	</script>

字符串分割split()：stringObject.split(separator,limit)
	split() 方法将字符串分割为字符串数组，并返回此数组。
	参数说明：
	separator：必需，从该参数指定的地方分割stringObject
	limit：可选参数，分割的次数。如设置该参数，返回的子串不会多于这个参数指定的数组，如果无此参数为不限制次数。
	document.write(mystr.split("-")+ "<br />");//按照指定的字符分割
	document.write(mystr.split("")+ "<br />");//将字符串分割为字符，直到分割完
	document.write(mystr.split("",3));//将字符串分割为字符，分割三次

提取字符串substring()：stringObject.substring(starPos,stopPos);
	substring() 方法用于提取字符串中介于两个指定下标之间的字符。
	参数说明：
	startPos：必需，一个非负的整数，开始位置。
	stopPos：可选，一个非负的整数，结束为止，如果省略，那么返回的子串会一直到字符串对象的结尾。

	注意：
	1. 返回的内容是从 start开始(包含start位置的字符)到 stop-1 处的所有字符，其长度为 stop 减start。
	2. 如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
	3. 如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。

	<script type="text/javascript">
		var mystr="Hello World!"
		document.write(mystr.substring(6)+ "<br />");//输出结果：World!
		document.write(mystr.substring(6,mystr.length-1));//输出结果：World
	</script>

提取指定数目的字符：stringObject.substr(startPos,length);
	substr() 方法从字符串中提取从 startPos位置开始的指定数目的字符串
	参数说明：
	startPos：必需。要提取的子串的起始位置，必须是数值。
	length：可选。提取字符串的长度，如果省略，返回从stringObject的开始位置startPos到stringObject的结尾的字符。
	注意：
	如果参数startPos是负数，从字符串的尾部开始算起的位置。也就是说，-1指字符串中最后一个字符，-2指倒数第二个字符，以此类推。
	如果startPos为负数且绝对值大于字符串长度，startPos为0
	<script type="text/javascript">
		var mystr="Hello World!";
		document.write(mystr.substr(6)+ "<br />");
		document.write(mystr.substr(0,5));
	</script>

Math对象：
	提供对数据的数学计算
	<script type="text/javascript">
	  var mypi=Math.PI;
	  var myabs=Math.abs(-15);
	  document.write(mypi);
	  document.write(myabs);
	</script>

向上取整：Math.ceil(x);
	ceil() 方法可对一个数进行向上取整
	注意：它返回的是大于或等于x，并且与x最接近的整数
	<script type="text/javascript">
		document.write(Math.ceil(3.3)+"<br>");
		document.write(Math.ceil(-0.1)+"<br>");
		document.write(Math.ceil(-9.9)+"<br>");
		document.write(Math.ceil(8.9));
	</script>

向下取整：Math.floor(x);
	floor() 方法可对一个数进行向下取整
	注意：返回的是小于或等于x，并且与 x 最接近的整数
	<script type="text/javascript">
	    document.write(Math.floor(3.3)+"<br>");
	    document.write(Math.floor(-0.1)+"<br>");
	    document.write(Math.floor(-9.9)+"<br>");
	    document.write(Math.floor(8.9)+"<br>");
	</script>

四舍五入： Math.round(x);
	round() 方法可把一个数字四舍五入为最接近的整数
	注意：
	1. 返回与 x 最接近的整数。
	2. 对于 0.5，该方法将进行上舍入。(5.5 将舍入为 6)
	3. 如果 x 与两侧整数同等接近，则结果接近 +∞方向的数字值 。(如 -5.5 将舍入为 -5; -5.52 将舍入为 -6)
	<script type="text/javascript">
	    document.write(Math.round(3.3)+"<br>");
	    document.write(Math.round(-0.1)+"<br>");
	    document.write(Math.round(-9.9)+"<br>");
	    document.write(Math.round(8.9)+"<br>");
	</script>

随机数： Math.random();
	random() 方法可返回介于 0 ~ 1（大于或等于 0 但小于 1 )之间的一个随机数
	注意：返回一个大于或等于 0 但小于 1 的符号为正的数字值
	<script type="text/javascript">
	    document.write(Math.random());//取得的数范围在0~1之间，若想让取得的数范围在0~x之间，最后再乘x即可
	</script>

数组对象：
	数组对象是一个对象的集合，里边的对象可以是不同类型的。数组的每一个成员对象都有一个“下标”，用来表示它在数组中的位置，是从零开始的
	数组定义的方法：
	1. 定义了一个空数组:
		var  数组名= new Array();
	2. 定义时指定有n个空元素的数组：
		var 数组名 =new Array(n);
	3.定义数组的时候，直接初始化数据：
		var  数组名 = [<元素1>, <元素2>, <元素3>...];

	数组元素使用：数组名[下标] = 值;
	注意: 数组的下标用方括号括起来，从0开始。

数组连接： arrayObj.concat(value1, value2);
	concat() 方法用于连接两个或多个数组。此方法返回一个新数组，不改变原来的数组
	注意:  该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
	<script type="text/javascript">
	    var myarr1= new Array("010")
	    var myarr2= new Array("-","84697581");
	    var myarr= myarr1.concat(myarr2);
	    document.write(myarr);
	</script>

指定分隔符连接数组元素: arrayObj.join("separator");
	参数：separator：可选，若为空则用逗号作为分隔符。需要用双引号括起参数。
	<script type="text/javascript">
		var myarr1= new Array("86","010")
		var myarr2= new Array("84697581");
		var myarr3= myarr1.concat(myarr2);
		document.write(myarr3.join("-"));
	</script>

颠倒数组元素顺序： arrayObj.reverse();
	reverse() 方法用于颠倒数组中元素的顺序
	注意：该方法会改变原来的数组，而不会创建新的数组
	<script type="text/javascript">
	   var myarr1= ["我","爱","你"];
	   document.write(myarr1.reverse());
	</script>

选定元素： arrayObj.slice(start, end);
	参数：
	start:必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说-1指最后一个元素，-2指倒数第二个元素，以此类推。
	end:可选，规定从何处结束选取。该参数是数组片段结束处的数组下标。如果没有指定该参数，那么切分的数组包含从start到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
	1.返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
	2. 该方法并不会修改数组，而是返回一个子数组。

	注意：
	1. 可使用负值从数组的尾部选取元素。
	2.如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
	3. String.slice() 与 Array.slice() 相似。
	<script type="text/javascript">
	   var myarr1= ["我","爱","你"];
	   document.write(myarr1.slice(1)+"<br>");//输出：爱你
	   document.write(myarr1.slice(-2)+"<br>");//输出：爱你
	   document.write(myarr1.slice(1,3)+"<br>");//输出：爱你
	</script>

数组排序： arrayObj.sort(compareFunction);
	sort()方法使数组中的元素按照一定的顺序排列
	参数：compareFunction：可选，规定排序顺序，必须是函数。
	1.如果不指定<方法函数>，则按unicode码顺序排列。
	2.如果指定<方法函数>，则按<方法函数>所指定的排序方法排序。
	<script type="text/javascript">
	   function sortNum(a,b) {
	    return b-a;//为什么b-a就可以完成降序排列，a-b就可以完成升序排列？？？
	   }
	var myarr = new Array("80","16","50","6","100","1");
	document.write(myarr.sort(sortNum));//将数组降序排列
	</script>

window对象：
	window对象是BOM的核心，window对象指当前的浏览器窗口。
	<script type="text/javascript">
	function openWindow(){
	    window.open("http://www.imooc.com",'_top');
	    window.resizeBy(600,400);
	    alert("欢迎来到慕课网");//打开新窗口，弹出对话框
	}
	</script>

	<form>
	<input type="button" value="点击我，打开新窗口" onclick="openWindow()" />
	</form>

JavaScript计时器：
	在JavaScript中，我们可以在设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。
	计时器类型：
	一次性计时器：仅在指定的延迟时间之后触发一次。
	间隔性触发计时器：每隔一定的时间间隔就触发一次。

计时器：setInterval(code,交互时间);
	在执行时,从载入页面后每隔指定的时间执行代码。

	参数说明：
	1. 代码：要调用的函数或要执行的代码串。
	2. 交互时间：周期性执行或调用表达式之间的时间间隔，以毫秒计（1s=1000ms）。

	返回值:
	一个可以传递给 clearInterval() 从而取消对"代码"的周期性执行的值。

	调用函数格式(假设有一个clock()函数):
	setInterval("clock()",1000)
	或
	setInterval(clock,1000)

	<script type="text/javascript">
	  var attime;
	  function clock(){
	    var time=new Date();
	    attime=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
	    document.getElementById("clock").value = attime;//将attime的值赋给id为clock的标签
	  }
	  setInterval(clock,100);
	</script>

	<form>
	<input type="text" id="clock" size="50"  />
	</form>

取消计时器：clearInterval(id_of_setInterval);
	clearInterval() 方法可取消由 setInterval() 设置的交互时间。
	参数说明:
	id_of_setInterval：由 setInterval() 返回的 ID 值。

	<script type="text/javascript">
	   function clock(){
	      var time=new Date();
	      document.getElementById("clock").value = time;
	   }
	    var i=setInterval(clock,100);
	</script>
	<form>
	  <input type="text" id="clock" size="50"  />
	  <input type="button" value="Stop" onclick="clearInterval(i)"/>
	</form>

计时器：setTimeout(代码,延迟时间);
	setTimeout()计时器，在载入后延迟指定时间后,去执行一次表达式,仅执行一次。
	参数说明：
	1. 要调用的函数或要执行的代码串。
	2. 延时时间：在执行代码前需等待的时间，以毫秒为单位（1s=1000ms)。
	参考"8-5setTimeout.html"。

取消计时器：clearTimeout(id_of_setTimeout);
	setTimeout()和clearTimeout()一起使用，停止计时器。
	参数说明:
	id_of_setTimeout：由 setTimeout() 返回的 ID 值。该值标识要取消的延迟执行代码块。

History对象：window.history.[属性|方法]。注意：window可以省略。
	history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。
	注意:从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。
	<script type="text/javascript">
	  var HL = window.history.length;
	  document.write(HL);
	</script>

返回前一个浏览的页面：window.history.back();
	back()方法，加载 history 列表中的前一个 URL。
	注意：等同于点击浏览器的倒退按钮。
	back()相当于go(-1),代码如下:
	window.history.go(-1);
	//参考"8-8返回前一个浏览的页面.html"

返回下一个浏览的页面：window.history.forward();
	forward()方法，加载 history 列表中的下一个 URL。
	注意：等价点击前进按钮。
	forward()相当于go(1),代码如下:
	window.history.go(1);
	// 参考"8-9返回下一个浏览页面.html"

返回浏览历史中的其他页面：window.history.go(number);
	go()方法，根据当前所处的页面，加载 history 列表中的某个具体的页面。

	浏览器中，返回当前页面之前浏览过的第二个历史页面，代码如下：
	window.history.go(-2);
	注意：和在浏览器中单击两次后退按钮操作一样。
	同理，返回当前页面之后浏览过的第三个历史页面，代码如下：
	window.history.go(3);
	// 参考"8-10返回浏览历史中的其他页面"

Location对象：location.[属性|方法]
	Location对象及方法参考文件夹内图片

Navigator对象：
	<!DOCTYPE HTML>
	<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>无标题文档</title>
	</head>
	<script type="text/javascript">
		document.write("浏览器代码名的字符串表示："+navigator.appCodeName+"<br>");
		document.write("浏览器的名称："+navigator.appName+"<br>");
		document.write("浏览器的平台和版本信息："+navigator.appVersion+"<br>");
		document.write("运行浏览器的操作系统平台："+navigator.platform+"<br>");
		document.write("由客户机发送服务器的user-agent头部的值："+navigator.userAgent+"<br>");
	</script>
	<body>
	</body>
	</html>

userAgent：navigator.userAgent;
	返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
	// 参考"8-13userAgent.html"

screen对象：window.screen.属性
	对象属性参考图片。

屏幕分辨率的宽高：
	window.screen 对象包含有关用户屏幕的信息。
	1. screen.height 返回屏幕分辨率的高
	2. screen.width 返回屏幕分辨率的宽
	注意：
	1.单位以像素计。
	2. window.screen 对象在编写时可以不使用 window 这个前缀。
	<script type="text/javascript">
		document.write( "屏幕宽度："+screen.width+"<br>");
		document.write( "屏幕高度："+screen.height);//获取屏幕宽高
	</script>

屏幕可用宽高：
	1. screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如任务栏。
	2. screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如任务栏。
	注意：
	不同系统的任务栏默认高度不一样，及任务栏的位置可在屏幕上下左右任何位置，所以有可能可用宽度和高度不一样。
	<script type="text/javascript">
	document.write("可用宽度："+screen.availWidth+"<br>");
	document.write("可用高度："+screen.availHeight);
	</script>

认识DOM：
	文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）
	HTML文档可以说由节点构成的集合，DOM节点有:
	1. 元素节点：即标签。
	2. 文本节点：向用户展示的内容，如<li>...</li>中的JavaScript、DOM、CSS等文本。
	3. 属性节点：元素属性，如<a>标签的链接属性href="http://www.imooc.com"。
	// 代码参见"9-1认识DOM.html"

getElementsByName('name')方法：
	返回带有指定名称的节点对象的集合
	注意:
	1.因为文档中的name属性可能不唯一，所有getElementsByName()方法返回的是元素的数组，而不是一个元素。
	2.和数组类似也有length属性，可以和访问数组一样的方法来访问，从0开始。
	// 代码参见"9-2getElementsByName.html"

getElementsByTagName('tagName')方法：
	返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序
	说明:
	1. Tagname是标签的名称，如p、a、img等标签名。
	2. 和数组类似也有length属性，可以和访问数组一样的方法来访问，所以从0开始。
	// 代码参见"9-3getElementsByTagName.html"
 
区别getElementByID,getElementsByName,getElementsByTagName
	以人来举例说明，人有能标识身份的身份证，有姓名，有类别(大人、小孩、老人)等。
	1. ID 是一个人的身份证号码，是唯一的。所以通过getElementById获取的是指定的一个人。
	2. Name 是他的名字，可以重复。所以通过getElementsByName获取名字相同的人集合。
	3. TagName可看似某类，getElementsByTagName获取相同类的人集合。如获取小孩这类人，getElementsByTagName("小孩")。
	// 代码参见"9-4区别getElementByID,getElementsByName,getElementsByTagName.html"

getAttribute(attributeName)：
	通过元素节点的属性名称获取属性的值。
	说明:
	1. elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。
	2. name：要想查询的元素节点的属性名字
	// 代码参见"9-5 getAttribute.html"

setAttribute(name, value)：
	setAttribute() 方法增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
	说明：
	1.name: 要设置的属性名。
	2.value: 要设置的属性值。
	注意：
	1.把指定的属性设置为指定的值。如果不存在具有指定名称的属性，该方法将创建一个新属性。
	2.类似于getAttribute()方法，setAttribute()方法只能通过元素节点对象调用的函数。
	//代码参见"9-6 setAttribute.html"

节点属性：
	在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：
	1. nodeName : 节点的名称
	2. nodeValue ：节点的值
	3. nodeType ：节点的类型

	一、nodeName 属性: 节点的名称，是只读的。
	1. 元素节点的 nodeName 与标签名相同
	2. 属性节点的 nodeName 是属性的名称
	3. 文本节点的 nodeName 永远是 #text
	4. 文档节点的 nodeName 永远是 #document

	二、nodeValue 属性：节点的值
	1. 元素节点的 nodeValue 是 undefined 或 null
	2. 文本节点的 nodeValue 是文本自身
	3. 属性节点的 nodeValue 是属性的值

	三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:
	元素类型    节点类型
	  元素          1
	  属性          2
	  文本          3
	  注释          8
	  文档          9
	// 代码参见"9-7节点属性.html"












