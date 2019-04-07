

<?php echo form_open("auth/login",array('class'=>'row mx-auto align-items-center col-12 col-xl-3 col-lg-5 col-md-6 col-sm-7'));?>
<h1><?php echo lang('login_heading');?></h1>
<p><?php echo lang('login_subheading');?></p>

<div id="infoMessage" class="text-danger"><?php echo $message;?></div>

  <p class="col-12">
    <?php echo lang('login_identity_label', 'identity');?>
    <?php echo form_input($identity);?>
  </p>

  <p  class="col-12">
    <?php echo lang('login_password_label', 'password');?>
    <?php echo form_input($password);?>
  </p>

  <p  class="col-12">
    <?php echo lang('login_remember_label', 'remember');?>
    <?php echo form_checkbox('remember', '1', FALSE, array('id'=>"remember"));?>
  </p>


  <p class="col-12"><?php echo form_submit('submit', lang('login_submit_btn'),array('class'=>'btn btn-primary'));?></p>

<p><a href="forgot_password"><?php echo lang('login_forgot_password');?></a></p>
<?php echo form_close();?>
