import picker from '@ohos:file.picker';
import mediaLibrary from '@ohos:multimedia.mediaLibrary';
import wantConstant from '@ohos:ability.wantConstant';
import { MediaBean } from '@bundle:com.example.XinMiao/entry/ets/common/bean/MediaBean';
/**
 * 多媒体辅助类
 */
export class MediaHelper {
    constructor(context) {
        this.TAG = 'MediaHelper';
        this.mContext = context;
    }
    /**
     * 选择图片
     */
    selectPicture() {
        try {
            let photoSelectOptions = new picker.PhotoSelectOptions();
            photoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.IMAGE_TYPE;
            photoSelectOptions.maxSelectNumber = 1;
            let photoPicker = new picker.PhotoViewPicker();
            return photoPicker.select(photoSelectOptions)
                .then((photoSelectResult) => {
                if (photoSelectResult && photoSelectResult.photoUris && photoSelectResult.photoUris.length > 0) {
                    let filePath = photoSelectResult.photoUris[0];
                    return filePath;
                }
            }).catch((err) => {
                return err;
            }).then(async (filePath) => {
                const mediaBean = await this.buildMediaBean(filePath);
                return mediaBean;
            });
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    /**
     * 选择文件
     */
    selectFile() {
        try {
            let documentSelectOptions = new picker.DocumentSelectOptions();
            let documentPicker = new picker.DocumentViewPicker();
            return documentPicker.select(documentSelectOptions)
                .then((documentSelectResult) => {
                if (documentSelectResult && documentSelectResult.length > 0) {
                    let filePath = documentSelectResult[0];
                    return filePath;
                }
            }).catch((err) => {
                return err;
            }).then(async (filePath) => {
                const mediaBean = await this.buildMediaBean(filePath);
                return mediaBean;
            });
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    /**
     * 拍照
     */
    async takePhoto(context) {
        let want = {
            'uri': '',
            'action': wantConstant.Action.ACTION_IMAGE_CAPTURE,
            'parameters': {},
        };
        return context.startAbilityForResult(want)
            .then((result) => {
            if (result.resultCode === 0 && result.want) {
                //拍照成功
                return result.want.uri;
            }
        }).catch((error) => {
            return error;
        }).then(async (uri) => {
            const mediaBean = await this.buildMediaBean(uri);
            return mediaBean;
        });
    }
    /**
     * 封装多媒体实体类
     *
     * @param uri 文件路径
     */
    async buildMediaBean(uri) {
        const mediaBean = new MediaBean();
        mediaBean.localUrl = uri;
        await this.appendFileInfoToMediaBean(mediaBean, uri);
        return mediaBean;
    }
    /**
     * 通过Uri查找所选文件信息，插入到MediaBean中
     * @param mediaBean
     * @param uri
     */
    async appendFileInfoToMediaBean(mediaBean, uri) {
        let fileList = [];
        const parts = uri.split('/');
        const id = parts.length > 0 ? parts[parts.length - 1] : '-1';
        try {
            let media = mediaLibrary.getMediaLibrary(this.mContext);
            let mediaFetchOptions = {
                selections: mediaLibrary.FileKey.ID + '= ?',
                selectionArgs: [id],
                uri: uri
            };
            let fetchFileResult = await media.getFileAssets(mediaFetchOptions);
            fileList = await fetchFileResult.getAllObject();
            fetchFileResult.close();
            await media.release();
        }
        catch (e) {
        }
        if (fileList && fileList.length > 0) {
            let fileInfoObj = fileList[0];
            mediaBean.fileName = fileInfoObj.displayName;
            mediaBean.fileSize = fileInfoObj.size;
            mediaBean.fileType = fileInfoObj.mimeType;
        }
    }
}
//# sourceMappingURL=MediaHelper.js.map