<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
    <link rel="shortcut icon" href="<?= base_url('favicon.jpg')?>">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<style>
body{
	margin:0px;
	font-family:cursive;
}
body div.nav{
	display: block;
    text-align: center;
    background: #0275d8;
    padding: 13px;
    font-family: sans-serif;
}
body div.nav a {
	color:white;
	text-decoration:none;
}
</style>
<body>

	<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<!-- <a href='<?php echo base_url('auth/charts')?>'>Charts</a> 
     	<a  href='<?php echo base_url('auth/survey_results')?>'>Show Data</a> 
     	<a  class="float-right" href='<?php echo base_url('auth/logout')?>'>Logout</a>  -->

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Modens Survey</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="<?= site_url('auth/survey_results')?>">Data </a>
      </li>
       <li class="nav-item ">
        <a class="nav-link" href="<?= site_url('auth/bonus_results')?>">Bonus Questions </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="<?= site_url('auth/charts')?>">Charts<span class="sr-only">(current)</span></a>
      </li>
    </ul>
      <a class="btn btn-success my-2 my-sm-0" href="<?= site_url('auth/logout')?>" >Logout</a>
  </div>
</nav>
	<!-- <div style='height:20px;'></div>   -->
    <div style="padding: 10px">
		<?php echo $output; ?>
    </div>
    <?php foreach($js_files as $file): ?>
        <script src="<?php echo $file; ?>"></script>
    <?php endforeach; ?>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
