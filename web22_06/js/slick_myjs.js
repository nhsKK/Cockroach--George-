//�����񂹗��T�C�h�\���i���X�|���V�u�j
	$(function() {
		$('.center-item').slick({
			arrows: true,/* ��� */
			infinite: true,/* ���[�v */
			dots: true,/* �h�b�g */
			cssEase: 'ease' ,
			slidesToShow: 1,
			centerMode: true, //�v�f�𒆉���
			centerPadding: '100px', //���T�C�h�̌����Ă��镔���̃T�C�Y
			autoplay: true, //�����Đ�
			responsive: [{
				breakpoint: 480,
				settings: {
					centerMode: false,
				}
			}]
		});
	});