use bevy::prelude::*;
use wasm_bindgen::prelude::*;
use web_sys::console;

macro_rules! console_log {
    ($($t:tt)*) => {
        console::log_1(&format!($($t)*).into());
    };
}

// 컴포넌트 정의
#[derive(Component)]
struct Rectangle;

#[wasm_bindgen]
pub fn start() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_systems(Startup, setup)
        .add_systems(Update, hello_world)
        .run();
}

fn hello_world() {
    console_log!("hello world!");
}

fn setup(mut commands: Commands) {
    // 카메라 설정
    commands.spawn(Camera2dBundle::default());

    // 네모 스프라이트 생성
    commands.spawn((
        SpriteBundle {
            sprite: Sprite {
                color: Color::rgb(0.25, 0.25, 0.75),  // 파란색 계열
                custom_size: Some(Vec2::new(50.0, 50.0)),  // 50x50 크기
                ..default()
            },
            transform: Transform::from_xyz(0.0, 0.0, 0.0),  // 중앙에 위치
            ..default()
        },
        Rectangle,
    ));
}