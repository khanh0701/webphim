function add()
{
	phim=$('#phim').val();
	if(phim!="")
	{
		var m_data = new FormData();
		m_data.append('addS',"add");
		m_data.append('phim',phim);
		m_data.append( 'file', $('input[name=file]')[0].files[0]);		
		$.ajax({
			url: "quanly/slider.php",
			type: "post",
			dateType: "json",
			data: m_data,
			processData: false,
			contentType: false,
			success: function(result){
				var obj = JSON.parse(result);
				document.getElementById("alert-success-top").innerHTML = obj.message;
				window.setTimeout(function(){location.reload()},500)
			}
		});
	}else{
			alert('Hãy nhập đầy đủ thông tin');
	}
}
function del(id)
{
	if(confirm('Bạn có muốn xóa không?'))
	{
	$.ajax({
			url : "quanly/slider.php",
			type : "post",
			dateType:"json",
			data : {
				deleteS:"delete",
				id:id,
			},
			success : function (result){		
				var obj = JSON.parse(result);
				document.getElementById("alert-success-top").innerHTML = obj.message;
				window.setTimeout(function(){location.reload()},500)
			}
		});
	}else{
		return;
	}
}