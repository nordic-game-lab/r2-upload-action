export interface R2Config {
    accountId: string
    accessKeyId: string
    secretAccessKey: string
    bucket: string
    jurisdiction: string
    sourceDir: string
    destinationDir: string
    outputFileUrl: boolean
    multiPartSize: number
    maxTries: number
    retryTimeout: number
    multiPartConcurrent: boolean
    keepFileFresh: boolean
    customCharset: string
    ghRefs: string
    devDestinationDir: string
    prodDestinationDir: string
}

export interface FileMap {
    [file: string]: string
}

export interface UploadResult<T extends object> {
    output: T
    url: string
}

export type UploadHandler<T extends object> = (file: string, fileName: string, config: R2Config, retries?: number, retryTimeout?: number) => Promise<UploadResult<T>>
