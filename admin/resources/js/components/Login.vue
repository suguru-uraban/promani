<template>
	<div class="login">
		<main class="login__body">
			<h1 class="login__title">
				<img src="../../images/logo_admin.png" width="200" alt="プロまに" class="login__logo">管理画面v1.0.0
			</h1>
			<ul class="login__form">
				<li class="login__form-wrap">
					<fas icon="user" class="login__icon" />
					<input type="text" placeholder="メールアドレスを入力" class="login__form-parts">
				</li>
				<li class="login__form-wrap">
					<fas icon="key" class="login__icon" />
					<input type="password" placeholder="パスワードを入力" class="login__form-parts">
				</li>
			</ul>
			<button class="login__button">ログイン</button>
		</main>
	</div>
</template>

<style lang="scss" scoped>
@import "resources/sass/variables";

.login {
	margin: auto;
	height: calc($height-base - 32px);
	position: absolute;
	top: 16px;
	left: 16px;
	right: 16px;
	bottom: 16px;
	border-radius: 8px;
	background-color: $color-admin-secondary;
	background-image: url("../../images/bg-admin-maki.svg");
	background-position: top 24px right 40px;
	background-repeat: no-repeat;
	background-size: 400px auto;
	&__body {
		margin: auto;
		padding: 16px;
		width: 400px;
		height: 280px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, .8);
		border-radius: 16px;
		box-shadow: 8px 8px 4px 0 rgba(0, 0, 0, .2);
	}
	&__title {
		font-size: 1.6rem;
		color: #666666;
		text-align: center;
	}
	&__logo {
		margin-right: 8px;
	}
	&__form {
		margin: 32px 40px 0;
		padding: 0 0 8px;
		list-style: none;
	}
	&__form-wrap {
		margin-bottom: 16px;
		display: flex;
	}
	&__form-parts {
		padding: 4px;
		height: 32px;
		font-size: 1.6rem;
		border: #cccccc solid 1px;
		border-radius: 8px;
		appearance: none;
		flex: 1;
		&::placeholder {
			color: #cccccc;
		}
	}
	&__icon {
		margin-right: 8px;
		width: 24px;
		height: auto;
		color: #666666;
	}
	&__button {
		margin: 0 auto;
		width: 150px;
		height: 40px;
		font-size: 2rem;
		color: #ffffff;
		display: block;
		border-radius: 8px;
		background: $color-admin-button;
		appearance: none;
		&:hover {
			color: #333333;
			background: $color-admin-button-hover;
		}
	}
}
</style>