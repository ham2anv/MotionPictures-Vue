CREATE TABLE [dbo].[MotionPicture] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50)  NOT NULL,
    [Description] NVARCHAR (500) NULL,
    [Year]        INT            NOT NULL,
    CONSTRAINT [PK_MotionPictures] PRIMARY KEY CLUSTERED ([Id] ASC)
);
