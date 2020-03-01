<template>
	<div class="login">
		<main class="login__body">
			<h1 class="login__title">
				<img src="../../images/logo_admin.png" width="200" alt="プロまに" class="login__logo" />管理画面v1.0.0
			</h1>
			<ul class="login__form">
				<li class="login__form-wrap">
					<fas icon="envelope" class="login__icon" />
					<ValidationProvider v-slot="{ errors }">
						<input
							type="text"
							placeholder="メールアドレスを入力"
							class="login__form-parts"
							v-model="value"
						/>
						<span>{{ errors[0] }}</span>
					</ValidationProvider>
				</li>
				<li class="login__form-wrap">
					<fas icon="key" class="login__icon" />
					<ValidationProvider v-slot="{ errors }">
						<input
							type="password"
							placeholder="パスワードを入力"
							class="login__form-parts"
							v-model="value"
						/>
						<span>{{ errors[0] }}</span>
					</ValidationProvider>
				</li>
			</ul>
			<button class="medium login__button">ログイン</button>
		</main>
	</div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.login {
	margin: auto;
	min-width: calc(1000px - (16px * 2));
	height: calc(100vh - 15px - (16px * 2));
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
		margin: 32px 48px 0;
		padding: 0;
		list-style: none;
	}
	&__form-wrap {
		margin-bottom: 24px;
		display: flex;
	}
	&__form-parts {
		flex: 1;
		&::placeholder {
			color: #cccccc;
		}
	}
	&__icon {
		margin-right: 16px;
		width: 24px;
		height: auto;
		color: #666666;
	}
	&__button {
		margin: 0 auto;
		display: block;
	}
}
</style>