use bevy::{asset::AssetMetaCheck, prelude::*};
use bevy_spine::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn start() {
    App::new()
        .add_plugins(DefaultPlugins.set(AssetPlugin {
            meta_check: AssetMetaCheck::Never,
            ..default()
        }))
        .add_plugins(SpinePlugin)
        .add_systems(Startup, setup)
        .add_systems(Update, set_skin_and_animation)
        .run();
}

#[derive(Component)]
pub struct NotInitialized;

fn setup(
    mut commands: Commands,
    mut skeletons: ResMut<Assets<SkeletonData>>,
    asset_server: Res<AssetServer>,
) {
    // 카메라 설정
    commands.spawn(Camera2dBundle::default());

    // Spine 애니메이션 설정
    let skeleton = SkeletonData::new_from_json(
        asset_server.load("spine/swordsman.json"),
        asset_server.load("spine/swordsman.atlas"),
    );
    let skeleton_handle = skeletons.add(skeleton);

    commands.spawn((
        bevy_spine::SpineBundle {
            skeleton: skeleton_handle.clone(),
            transform: Transform::from_xyz(0., 0., 0.).with_scale(Vec3::ONE),
            ..Default::default()
        },
        NotInitialized,
    ));
}

fn set_skin_and_animation(mut spine_query: Query<&mut Spine, With<NotInitialized>>) {
    for mut spine in spine_query.iter_mut() {
        let _ = spine.skeleton.set_skin_by_name("green");
        if spine
            .animation_state
            .track_at_index(1)
            .map(|track| track.animation_time() == track.animation_end())
            .unwrap_or(true)
        {
            let _ = spine
                .animation_state
                .set_animation_by_name(1, "idle", false);
        }
    }
}
