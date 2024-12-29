use bevy::{
  asset::AssetMetaCheck,
  diagnostic::{FrameTimeDiagnosticsPlugin, LogDiagnosticsPlugin},
  prelude::*,
};
use bevy_spine::prelude::*;
use rand::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn main() {
  App::new()
      .add_plugins(DefaultPlugins.set(AssetPlugin {
          meta_check: AssetMetaCheck::Never,
          ..default()
      }))
      .add_plugins(SpinePlugin)
      .add_plugins(FrameTimeDiagnosticsPlugin::default())
      .add_plugins(LogDiagnosticsPlugin::default())
      .add_systems(Startup, setup)
      .add_systems(
          Update,
          (
              set_skin_and_animation,
              monitor_animation,
              update_fps_display,
          ),
      )
      .run();
}

#[derive(Component)]
struct FpsText;

#[derive(Component)]
pub struct NotInitialized;

fn setup(
  mut commands: Commands,
  mut skeletons: ResMut<Assets<SkeletonData>>,
  asset_server: Res<AssetServer>,
) {
  commands.spawn(Camera2dBundle::default());

  commands.spawn((
      TextBundle::from_section(
          "FPS: ",
          TextStyle {
              font_size: 30.0,
              color: Color::WHITE,
              ..default()
          },
      )
      .with_style(Style {
          position_type: PositionType::Absolute,
          top: Val::Px(10.0),
          left: Val::Px(10.0),
          ..default()
      }),
      FpsText,
  ));

  let skeleton = SkeletonData::new_from_json(
      asset_server.load("spine/swordsman.json"),
      asset_server.load("spine/swordsman.atlas"),
  );
  let skeleton_handle = skeletons.add(skeleton);

  let mut rng = rand::thread_rng();

  for _ in 0..1000 {
      let x = rng.gen_range(-640.0..640.0);
      let y = rng.gen_range(-360.0..360.0);

      commands.spawn((
          bevy_spine::SpineBundle {
              skeleton: skeleton_handle.clone(),
              transform: Transform::from_xyz(x, y, 0.).with_scale(Vec3::splat(0.3)),
              ..Default::default()
          },
          NotInitialized,
      ));
  }
}

fn set_skin_and_animation(
  mut commands: Commands,
  mut spine_query: Query<(Entity, &mut Spine), With<NotInitialized>>,
) {
  for (entity, mut spine) in spine_query.iter_mut() {
      let _ = spine.skeleton.set_skin_by_name("green");
      let _ = spine
          .animation_state
          .set_animation_by_name(1, "idle", false);
      commands.entity(entity).remove::<NotInitialized>();
  }
}

fn monitor_animation(mut spine_query: Query<&mut Spine, Without<NotInitialized>>) {
  for mut spine in spine_query.iter_mut() {
      if let Some(track) = spine.animation_state.track_at_index(1) {
          if track.animation_time() == track.animation_end() {
              let _ = spine
                  .animation_state
                  .set_animation_by_name(1, "idle", false);
          }
      }
  }
}

fn update_fps_display(
  diagnostics: Res<bevy::diagnostic::DiagnosticsStore>,
  mut query: Query<&mut Text, With<FpsText>>,
) {
  if let Some(fps) = diagnostics.get(&FrameTimeDiagnosticsPlugin::FPS) {
      if let Some(value) = fps.smoothed() {
          if let Ok(mut text) = query.get_single_mut() {
              text.sections[0].value = format!("FPS: {value:.2}");
          }
      }
  }
}
