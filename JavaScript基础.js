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
	变量要先声明再赋值，也可以在声明的同时赋值，也可以重复赋值

if else语句：
	if(条件){
		条件成立时执行的代码
	}else{
		条件不成立时执行的代码
	}

函数：
	function 函数名 () {
		函数代码
	}

	说明:
	1. function定义函数的关键字。
	2. "函数名"你为函数取的名字。
	3. "函数代码"替换为完成特定功能的代码。

	函数调用:
	函数定义好后，是不能自动执行的，所以需调用它,只需直接在需要的位置写函数就ok了
	<script type="text/javascript">
	function add () {
		sum=5+6;
		alert(sum);
	}
	add();//调用函数，可以是事件
	</script>
	<form>
		<input type="button" value="点击" onclick="add()"><!-- 点击按钮以后弹出对话框，显示内容：11 -->
	</form>

输出内容 document.write();
	第一种：输出内容用“”括起，直接输出""号内的内容
		document.write("I love JavaScript");
	第二种：通过变量，输出内容
		var mystr="Hello World";
		document.write(mystr);
	第三种：输出多项内容，内容之间用+号连接
		var mystr="Hello";
		document.write(mystr+" World!");
	第四种：输出HTML标签，并起作用，标签使用“”括起来
		var mystr="Hello";
		document.write(mystr+"<br>");

输出空格：
	第一种：用html标签 &nbsp; 来解决
		document.write("&nbsp;&nbsp;"+"1"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"23");
	第二种：用CSS样式来解决
		document.write("<span style='whiteSpace:pre;'>"+  1     23+"</span>");

警告：(alert对话框)
	alert(字符串或变量名);
		alert("message");
		alert(variableName);

确认：(confirm对话框)
	confirm(str);
	str:在消息对话框中要显示的文本
	返回值:Boolean。当用户点击确定时，返回true；当用户点击取消时，返回false。
	可以通过返回值来确定用户点击了什么按钮。

提问：(prompt对话框)
	prompt(text, value);
	text: 要显示在消息对话框中的文本，不可修改
	value：文本框中的内容，可以修改
	返回值:
		1. 点击确定按钮，文本框中的内容将作为函数返回值
		2. 点击取消按钮，将返回null
	代码示例：
	var myName=prompt("请输入你的姓名:");
	if(myName!=null){
		alert("你好"+myName);
	}else{
		alert("你好 my friend.");
	}

打开新窗口：window.open(strUrl, strWindowName);
	window.open('http://www.baidu.com', '_blank')
	strWindowName:可选参数，被打开窗口的名称。
		1.该名称由字母、数字和下划线字符组成。
		2."_top"、"_blank"、"_self"具有特殊意义的名称。
			_blank：在新窗口显示目标网页
			_self：在当前窗口显示目标网页
			_top：框架网页中在上部窗口中显示目标网页
		3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
		4.name 不能包含有空格
	参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
		top：窗口顶部离开屏幕顶部的像素数
		left：窗口左端离开屏幕左端的像素数
		width：窗口的宽度
		height：窗口的高度
		menubar：窗口有没有菜单
		toolbar：窗口有没有工具条
		scrollbars：窗口有没有滚动条
		status：窗口有没有状态栏

关闭窗口：window.close();
	window.close();//关闭本窗口
	<窗口对象>.close();//关闭指定的窗口
	关闭指定的窗口：
	<script type="text/javascript">
	   var mywin=window.open('http://www.imooc.com'); //将新打的窗口对象，存储在变量mywin中
	   mywin.close();
	</script>

认识DOM：
	文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM将HTML文档呈现为带有元素、属性和文本的树结构（节点树）
	HTML文档可以说由节点构成的集合，三种常见的DOM节点:
	1. 元素节点：上图中<html>、<body>、<p>等都是元素节点，即标签。
	2. 文本节点:向用户展示的内容，如<li>...</li>中的JavaScript、DOM、CSS等文本。
	3. 属性节点:元素属性，如<a>标签的链接属性href="http://www.imooc.com"

通过ID获取元素：
	getElementById("id");

	<p id="con">JavaScript</p>
	<script type="text/javascript">
		var mychar= document.getElementById("con");//输出结果：[object HTMLParagraphElement]
		document.write("结果:"+mychar); //输出获取的P标签。
	</script>
	</body>

innerHTML：Object.innerHTML
	innerHTML 属性用于获取或替换 HTML 元素的内容
	注意:
		1.Object是获取的元素对象，如通过document.getElementById("ID")获取的元素。
		2.注意书写，innerHTML区分大小写

	<script type="text/javascript">
	  var mychar= document.getElementById("con");
	  document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
	  mychar.innerHTML="Hello World!";
	  document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容
	</script>

改变HTML样式：Object.style.property=new style;
	注意:Object是获取的元素对象，如通过document.getElementById("id")获取的元素
	基本属性表：
		backgroundColor:设置元素的背景颜色
		height:设置元素的高度
		width:设置元素的宽度
		color:设置文本的颜色
		font:在一行设置所有的字体属性
		fontFamily:设置元素的字体系列
		fontSize:设置元素的字体大小

		<script type="text/javascript">
			var mychar= document.getElementById("con");
			mychar.style.color="red";
			mychar.style.backgroundColor="#ccc";
			mychar.style.width="300px";
		</script>

显示和隐藏（display属性）：Object.style.display = value
	网页中经常会看到显示和隐藏的效果，可通过display属性来设置
	注意:Object是获取的元素对象，如通过document.getElementById("id")获取的元素
	value取值：
		none:此元素不会被显示（即隐藏）
		block:此元素将显示为块级元素（即显示）

		<script type="text/javascript"> 
		        function hidetext()  
				{  
				var mychar = document.getElementById("con");
		        mychar.style.display="none";
				}  
				function showtext()  
				{  
				var mychar = document.getElementById("con");
		        mychar.style.display="block";
				}
		    </script>

控制类名（className属性）Object.className = classname
	className 属性设置或返回元素的class 属性
	作用:
	1.获取元素的class 属性
	2.为网页内的某个元素指定一个css样式来更改该元素的外观

	<script type="text/javascript">
		   function add(){
		      var p1 = document.getElementById("p1");
		      p1.className="one";
		   }
		   function modify(){
		      var p2 = document.getElementById("p2");
		      p2.className="two";
		   }
		</script>











