$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#stress-symptom").show();
    $("input:checkbox[name=stress-symptom]:checked").each(function(){
      const stressSymptomMode = $(this).val();
      $('#stress-symptom').append(stressSymptomMode + "<br>");
    });
    $("#health-symptom").show();
    $("input:checkbox[name=health-symptom]:checked").each(function(){
      const healthSymptomMode = $(this).val();
      $('#health-symptom').append(healthSymptomMode + "<br>");
    });
    $("#coping-stress").show();
    $("input:checkbox[name=coping-stress]:checked").each(function(){
      const copingStressMode = $(this).val();
      $('#coping-stress').append(copingStressMode + "<br>");
    });
    $('#stress-test').hide();
  });
});