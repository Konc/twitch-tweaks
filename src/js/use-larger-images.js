const avatarSize = "600x600";
const thumbnailSize = "1920x1080";

setInterval(function () {
  // Make avatars use larger versions by default
  var avatars = document.querySelectorAll(".tw-avatar img");
  for (let avatar of avatars) {
    if (avatar.src.indexOf(avatarSize) == -1) {
      avatar.src = avatar.src.replace(/[0-9]{2,3}x[0-9]{2,3}/, avatarSize);
    }
  }

  // Make stream thumbnails use larger versions by default
  var thumbnails = document.querySelectorAll(
    'a[data-a-target="preview-card-image-link"] .tw-image'
  );
  for (let thumbnail of thumbnails) {
    if (thumbnail.src.indexOf(thumbnailSize) == -1) {
      thumbnail.src = thumbnail.src.replace(
        /[0-9]{3,4}x[0-9]{3,4}/,
        thumbnailSize
      );
    }
  }
}, 5000);
